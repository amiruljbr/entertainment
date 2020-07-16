const express = require('express');
const app = express ();
const PORT = process.env.PORT || 3000;
const mongo = require('./config.js');

mongo.connect(function(err){
  if(!err){
    app.use(express.json());
    app.use(express.urlencoded({ extended:false }))
    app.get('/', (req,res)=>{
      res.send('hello world')
    })

    app.listen(PORT, ()=>{
      console.log('app is running on port 3000');
    })
  }
})