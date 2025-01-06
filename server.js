var express = require("express");
var bodyParser = require("body-parser");
var DB = require("nedb-promises");

// 建立伺服器
var server = express();

// 設置 Body Parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// 設置靜態文件目錄
server.use(express.static(__dirname + "/my portfolio"));

// 建立資料庫
var commentDB = DB.create(__dirname + "/comment.db");

// 處理 POST 請求（儲存評論資料）
server.post("/contact_me", (req, res) => {
    var comment = {
        name: req.body.name,
        message: req.body.message,
    };

    // 儲存到資料庫
    commentDB.insert(comment)
        .then(() => {
            console.log("成功儲存評論:", comment);
            res.redirect("/"); // 導回主頁
        })
        .catch(err => {
            console.error("儲存失敗:", err);
            res.status(500).send("儲存失敗，請稍後再試！");
        });
});

// 啟動伺服器
const PORT = process.env.PORT || 8000;
server.listen(8000, () => {
    console.log("伺服器正在執行，監聽 Port 5501...");
});
