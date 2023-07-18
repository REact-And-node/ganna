
var express = require("express");
const http = require('http');
const {Server}  =require("socket.io");
const cors=require("cors")

const multer = require('multer');
const { Console } = require("console");
var app = express();
const fs = require('fs');
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

let song=[
  {
    index: 0,
    img: "https://a10.gaanacdn.com/gn_img/albums/2lV3d1WRgB/lV3dlLXx3R/size_m.jpg",
    name: "Aqua.mp3",
  },
  {
    index: 1,
    img: "https://a10.gaanacdn.com/gn_img/albums/VdNW0Mbo5e/dNW07QV23o/size_m.jpg",
    name: "Ziddi Dil Full Video _ MARY KOM _ Feat Priyanka Chopra _ Vishal Dadlani _ HD_256k.mp3",
  },
  {
    index: 2,
    img: "https://a10.gaanacdn.com/gn_img/albums/mGjKrP1W6z/jKrPm881W6/size_m.jpg",
    name: "Hath Yu Thama- ( हाथ यूँ थामा तुमने फिर क्यूँ ये छोड़ दिया) Ft - Manish Joshi _ A_256k.mp3",
  },
  {
    index: 3,
    img: "https://a10.gaanacdn.com/gn_img/albums/Rz4W87v3xD/4W8eLQG1bx/size_m.jpg",
    name: "Dil Ne - Manish Joshi _ Aditya Dev _ Official Music Video_256k.mp3",
  },
  {
    index: 4,
    img: "https://a10.gaanacdn.com/gn_img/albums/JD2KJyAbOL/2KJyBwzlbO/size_m.jpg",
    name: "Otnicka - Peaky Blinder (lyrics) _ i am not outsider i'm a peaky blinder_256k.mp3",
  },
  {
    index: 5,
    img: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlwVEy3z/size_m.jpg",
    name: "Jiya Full Song _ Gunday _ Ranveer Singh, Priyanka Chopra _ Arijit Singh _ Sohail_256k.mp3",
  },
  {
    index: 6,
    img: "https://a10.gaanacdn.com/gn_img/albums/YoEWlwa3zX/EWlwzAAB3z/size_l.jpg",
    name: "ACT BAD - Diddy ft. City Girls & Fabolous [Official Video]_256k.mp3",
  },
  {
    index: 7,
    img: "https://a10.gaanacdn.com/gn_img/albums/z8k3yd1Krx/k3ydyd9EKr/size_m.jpg",
    name: "BeyoncÃ© - CUFF IT (Official Lyric Video)_256k.mp3",
  },
  {
    index: 8,
    img: "https://a10.gaanacdn.com/gn_img/shows/YoEWlabzXB/oEWllgYWzX/size_m_1685963486.jpg",
    name: "Sam Smith, Kim Petras - Unholy (Official Music Video)_256k.mp3",
  },
  {
    index: 9,
    img: "https://m.media-amazon.com/images/M/MV5BNjA2ZTljYjUtZTg5Yy00MDg0LTk3NTItNjllOWNjZWI2OTczXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX604_.jpg",
    name: "David Guetta & Bebe Rexha - I'm Good (Blue) [Official Music Video]_256k.mp3",
  },
  {
    index: 10,
    img: "https://i1.sndcdn.com/artworks-qlcLqzNMV2PHCWtS-EZwcIQ-t500x500.jpg",
    name: "Baby Don’t Hurt",
  },
]




app.get('/song/:index',async (request, res) => {
  const index=request.params.index
  
let find=song.find((st)=>st.name==index)

  res.send(find);
  console.log("index",index)
  
});



app.listen(port, () => console.log(`Node app listening on port ${port}!`));

