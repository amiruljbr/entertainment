const router = require('express').Router();
const moviesRouter = require('./moviesRoutes');
const tvRoutes = require('./tvRoutes');

router.get('/entertainMe', async (req,res)=>{
  let movies = await redis.get('movies');
  if (movies) {
    res.status(200).json(JSON.parse(movies))
  } else {
    try {
      const { data } = await axios.get('http://localhost:3001/movies');
      redis.set('movies', JSON.stringify(data));
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
})
router.use('/movies', moviesRouter)
router.use('/tv', tvRoutes)

module.exports = router

