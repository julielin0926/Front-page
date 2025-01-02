const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// 解析表單資料
app.use(bodyParser.urlencoded({ extended: true }));

// 設定靜態檔案路徑
app.use(express.static("Front-page"));

// 連接 MongoDB
mongoose.connect("mongodb://localhost:27017/commentDB", { useNewUrlParser: true, useUnifiedTopology: true });

// 建立資料庫 Schema 和 Model
const commentSchema = new mongoose.Schema({
    name: String,
    message: String,
});
const Comment = mongoose.model("Comment", commentSchema);

// 處理表單提交
app.post("/contact_me", (req, res) => {
    const newComment = new Comment({
        name: req.body.name,
        message: req.body.message,
    });

    // 儲存到資料庫
    newComment.save((err) => {
        if (!err) {
            res.send("評論已成功提交！");
        } else {
            res.status(500).send("發生錯誤，無法儲存評論！");
        }
    });
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`伺服器已啟動，訪問 http://localhost:${port}`);
});
