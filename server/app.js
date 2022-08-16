//uuid,sqlite3,multer 三个辅助库  
const express = require ('express')
const multer = require('multer')
const app = express();
const port = 8080

//开放跨域请求
app.use(function (req,res,next){
  //设置允许跨域的域名 *代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin',"*")
  res.header('Access-Control-Allow-Headers',"*")
  res.header('Access-Control-Allow-Methods',"DELETE,PUT,POST,GET,OPTIONS")
  if(req.method == "OPTIONS") res.sendStatus(200) //options尝试快速结束
  else next();
})
//上传允许解析
app.use(express.json())
const update = multer({
  dest:"/public/upload/temp"
})
app.use(update.any())


app.get('/',(req,res)=>{
  res.send('hello,world')
})

app.listen(port,()=>{
  console.log('启动成功',`http:/localhost:${port}/`);
})