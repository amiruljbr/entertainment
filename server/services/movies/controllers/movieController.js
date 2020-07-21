const Movie = require('../models/movie.js');

class MovieController {
  static findAll(req,res) {
    Movie.find()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static findById(req,res) {
    Movie.findById(req.params.id)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static create(req,res) {
    req.body.popularity = Number(req.body.popularity);
    const newMovie = req.body;
    Movie.create(newMovie)
    .then(data=>{
      res.status(201).json(data.ops[0]);
    })
    .catch(err =>{
      res.status(500).json(err);
    })
  }

  static findByIdAndDelete(req,res) {
    Movie.findById(req.params.id)
    .then((data1)=>{
      if (!data1) {
        res.status(400).json({ message: 'id not valid'})
      } else {
        return Movie.findByIdAndDelete(req.params.id)
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
    const newMovie = req.body;

    Movie.findById(req.params.id)
    .then((data1)=>{
      if (!data1) {
        res.status(400).json({ message: 'id not valid'})
      } else {
        return Movie.findByIdAndUpdate(req.params.id, newMovie)
      }  
    })
    .then(data=>{
      res.status(200).json(newMovie);
    })
    .catch(err =>{
      res.status(500).json(err);
    })
  }
}

module.exports = MovieController;