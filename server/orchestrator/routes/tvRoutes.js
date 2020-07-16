const axios = require('axios');
const Redis = require('ioredis');
const redis = new Redis();
const router = require('express').Router()

router.get('/', async (req,res)=>{
  const tv = await redis.get('tv');
  if (tv) {
    res.status(200).json(JSON.parse(tv))
  } else {
    const { data } = await axios.get('http://localhost:3002/tv')
    redis.set('tv', JSON.stringify(data), 'ex', 600)
    res.status(200).json(data)
  }
})

router.post('/', async (req,res)=>{
  const newMovie = req.body;
  const { data } = await axios.post('http://localhost:3002/tv', newMovie);
  redis.del('tv');
  res.status(201).json(data);
})

router.put('/:id', async (req,res)=>{
  const newMovie = req.body;
  const { data } = await axios.put(`http://localhost:3002/tv/${req.params.id}`, newMovie);
  redis.del('tv');
  res.status(200).json(data);
})

router.get('/:id', async (req,res)=>{
  const { data } = await axios.get(`http://localhost:3002/tv/${req.params.id}`);
  res.status(200).json(data);
})

router.delete('/:id', async (req,res)=>{
  const { data } = await axios.delete(`http://localhost:3002/tv/${req.params.id}`);
  redis.del('tv');
  res.status(200).json(data);
})

module.exports = router