const TvSerie = require('../models/tvSerie.js');

class TvSerieController {
  static findAll(req,res) {
    TvSerie.find()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static findById(req,res) {
    TvSerie.findById(req.params.id)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static create(req,res) {
    req.body.popularity = Number(req.body.popularity);
    req.body.tags = req.body.tags.split(',')
    const newTvSerie = req.body;
    TvSerie.create(newTvSerie)
    .then(data=>{
      res.status(201).json(data.ops[0]);
    })
    .catch(err =>{
      res.status(500).json(err);
    })
  }

  static findByIdAndDelete(req,res) {
    TvSerie.findById(req.params.id)
    .then((data1)=>{
      if (!data1) {
        res.status(400).json({ message: 'id not valid'})
      } else {
        return TvSerie.findByIdAndDelete(req.params.id)
      }  
    })
    .then(data=>{
      res.status(200).json({ message: `data with id ${req.params.id} has been deleted`});
    })
    .catch(err =>{
      res.status(500).json(err);
    })
  }

  static findByIdAndUpdate(req,res) {
    req.body.popularity = Number(req.body.popularity);
    req.body.tags = req.body.tags.split(',')
    const newTvSerie = req.body;

    TvSerie.findById(req.params.id)
    .then((data1)=>{
      if (!data1) {
        res.status(400).json({ message: 'id not valid'})
      } else {
        return TvSerie.findByIdAndUpdate(req.params.id, newTvSerie)
      }  
    })
    .then(data=>{
      res.status(200).json(newTvSerie);
    })
    .catch(err =>{
      res.status(500).json(err);
    })
  }
}

module.exports = TvSerieController;