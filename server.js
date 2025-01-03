// 引入模組
var express = require("express");
var bodyParser = require("body-parser");
var DB = require("nedb-promises");

// 建立伺服器
var server = express();

//web root
server.use(express.static(__dirname+"/my portfolio"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

// 設置靜態文件目錄
server.use(express.static(__dirname + "/contact_me"));

// 建立資料庫
var commentDB = DB.create(__dirname + "/comment.db");

// 處理 POST 請求（儲存評論資料）
server.post("/contact_me", (req, res) => {
    // 從表單接收資料
    var comment = {
        name: req.body.name,
        message: req.body.message,
        createdAt: new Date(), // 加入時間戳
    };

    // 儲存到資料庫
    commentDB.insert(comment)
        .then(() => {
            console.log("成功儲存評論:", comment);
            res.redirect("/contact_me"); // 導回主頁（或其他頁面）
        })
        .catch(err => {
            console.error("儲存失敗:", err);
            res.status(500).send("儲存失敗，請稍後再試！");
        });
});

// 啟動伺服器
server.listen(8000, () => {
    console.log("伺服器正在執行，監聽 Port 80...");
});
