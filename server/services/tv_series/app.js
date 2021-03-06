require('dotenv').config();
const express = require('express');
const app = express ();
const PORT = process.env.PORT || 3002;
const cors = require('cors');
const router = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(PORT, ()=>{
  console.log(`app run on PORT:${PORT}`);
})