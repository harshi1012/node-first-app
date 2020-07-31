// expressjs- webfram work for node JS
const express = require("express")
const app = express();
const port = 3000;
app.get("/",function(req,res){
res.send("Welcome to NodeJS")
})
app.listen(port,function(){
    console.log("Server Listening at Port " + port)
})