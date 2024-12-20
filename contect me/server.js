const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000; // 設置伺服器埠號

// 使用 body-parser 解析請求
app.use(bodyParser.urlencoded({ extended: true }));

// 靜態資源路徑
app.use(express.static(path.join(__dirname, "public")));

// 接收評論 POST 請求
app.post("/submit-comment", (req, res) => {
    const { name, message } = req.body;

    if (!name || !message) {
        return res.status(400).send("姓名和評論內容是必填的！");
    }

    // 格式化評論內容
    const comment = `作品名稱: ${name}\n評論: ${message}\n\n`;

    // 確保 comment 資料夾存在
    const commentsDir = path.join(__dirname, "comment");
    if (!fs.existsSync(commentsDir)) {
        fs.mkdirSync(commentsDir);
    }

    // 寫入 txt 檔案
    const filePath = path.join(commentsDir, "comments.txt");
    fs.appendFile(filePath, comment, (err) => {
        if (err) {
            console.error("無法儲存評論：", err);
            return res.status(500).send("伺服器內部錯誤");
        }
        console.log("評論已儲存！");
        res.send("評論已成功送出！");
    });
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器運行於 http://localhost:${PORT}`);
});
