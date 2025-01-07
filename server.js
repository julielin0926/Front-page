var express = require("express");
var bodyParser = require("body-parser");
var DB = require("nedb-promises");
var fileUpload = require("express-fileupload");

// 建立伺服器
var server = express();

// 設置 Body Parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// 載入 express-fileupload，用於上傳檔案。
var fileUpload = require("express-fileupload"); 
// 啟用檔案上傳功能，並設定預設字元編碼為 UTF-8。
server.use(fileUpload({ defCharset: 'utf8', defParamCharset: 'utf8' })); 

// 設置靜態文件目錄
server.use(express.static(__dirname + "/my portfolio"));
// 創建一個名為 ProfolioDB 的資料庫
var ProfolioDB = DB.create(__dirname + "/profolio.db"); 
// 建立一個名為commentDB的資料庫
var commentDB = DB.create(__dirname + "/comment.db");

//ProfolioDB功能
// 上傳處理
server.post("/upload", (req, res) => {
    const { name, password } = req.body;
    const file = req.files?.file;

    if (password !== "julie0926") {
        return res.status(403).send("無密碼不可上傳作品");
    }

    if (!file) {
        return res.status(400).send("未上傳圖片");
    }

    const uploadPath = __dirname + "/my portfolio/sketching exercises/uploads/" + file.name;
    file.mv(uploadPath, (err) => {
        if (err) {
            return res.status(500).send("圖片儲存失敗");
        }

        const newProfolio = {
            name: name,
            imgSrc: "uploads/" + file.name,
        };

        ProfolioDB.insert(newProfolio)
            .then(() => res.send("上傳成功"))
            .catch(() => res.status(500).send("資料庫儲存失敗"));
    });
});

// 載入作品
server.get("/profolio", (req, res) => {
    ProfolioDB.find({})
        .then((data) => res.json(data))
        .catch(() => res.status(500).send("資料加載失敗"));
});



//commentDB功能
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
    console.log("伺服器正在執行，監聽 Port 8000...");
});
