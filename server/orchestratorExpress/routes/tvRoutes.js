const axios = require('axios');
const Redis = require('ioredis');
const redis = new Redis();
const router = require('express').Router()

router.get('/', async (req,res)=>{
  const tv = await redis.get('tv');
  if (tv) {
    res.status(200).json(JSON.parse(tv))
  } else {
    try {
      const { data } = await axios.get('http://localhost:3002/tv');
      redis.set('tv', JSON.stringify(data));
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
})

router.post('/', async (req,res)=>{
  const newMovie = req.body;
  try {
    const { data } = await axios.post('http://localhost:3002/tv', newMovie);
    redis.del('tv');
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.put('/:id', async (req,res)=>{
  const newMovie = req.body;
  try {
    const { data } = await axios.put(`http://localhost:3002/tv/${req.params.id}`, newMovie);
    redis.del('tv');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
  
})

router.get('/:id', async (req,res)=>{
  try {
    const { data } = await axios.get(`http://localhost:3002/tv/${req.params.id}`);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.delete('/:id', async (req,res)=>{
  try {
    const { data } = await axios.delete(`http://localhost:3002/tv/${req.params.id}`);
    redis.del('tv');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router