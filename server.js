//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");

//web root
server.use(express.static(__dirname+"/contact_me"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

var fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));


var DB = require("nedb-promises");
var commentDB = DB.create(__dirname+"/comment.db");

server.get("/services", (req, res)=>{
    //DB find
    var Services=[
        {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
        {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
    ];
    res.send(Services);
});

server.post("/contact_me", (req, res) => {
    // 插入資料到 commentDB
    commentDB.insert(req.body)
        .then(() => {
            console.log("評論已儲存：", req.body);
            res.redirect("/#comment"); // 成功後重新導向
        })
        .catch((err) => {
            console.error("儲存評論時發生錯誤：", err);
            res.status(500).send("儲存評論時發生錯誤！");
        });
});

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})