var express = require("express");
const http = require('http');
const {Server}  =require("socket.io");
const cors=require("cors")
var mongoose=require("mongoose")
const grid = require('gridfs-stream');
const {GridFsStorage} = require('multer-gridfs-storage');
const multer = require('multer');
const { Console } = require("console");
var app = express();
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port =2410;


const playlist=[{
  img: 'https://a10.gaanacdn.com/gn_img/default/Song/size_m.jpg',
  name: 'My playlist'
}]
const playlistdata=[{
  index: 11,playlistname:'My playlist',
  name: 'Mere Mehboob Qayamat Hogi (Original) - Mr. X In Bombay - Kishore Kumars Greatest Hits - Old Songs',
  img: 'https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/Old-is-Gold-300x300.png'
}]


 app.get('/playlist',async(req,res) => {

   res.send(playlist)
 })
app.post('/playlist',async(req,res) => {
  const body =req.body
  console.log(body)
 let find=playlist.find((st)=>st.name===body.name)
   find?"":playlist.push(req.body)
 

  
   res.send({...body})
 
   
   
  
 })
app.post('/playlistdata',async(req,res) => {
  const body =req.body
  console.log("body",body)
  let find=playlistdata.find((st)=>st.index==body.index&&st.playlistname==body.playlistname)
   find?"":playlistdata.push(req.body)
   console.log("playlistdata",playlistdata)
   res.send({body})
  } )
app.post('/remove',async(req,res) => {
  const body =req.body
  console.log("body",body)
 playlistdata.splice(body.index,1)
   console.log("remove",body.index)
   res.send({body})
  } )
app.get('/playlistdata/:name',async(req,res) => {
  const name =req.params.name
  let find=playlistdata.filter((st)=>st.playlistname==name)
  console.log(`playlistdata:${name}`,find)
   res.send(find)
 })
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

