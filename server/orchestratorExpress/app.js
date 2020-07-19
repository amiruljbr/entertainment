require('dotenv').config();
const express = require('express');
// const axios = require('axios');
// const Redis = require('ioredis');
// const redis = new Redis();
const app = express ();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(PORT, ()=>{
  console.log(`app run on PORT:${PORT}`);
})