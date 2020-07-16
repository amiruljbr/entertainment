const router = require('express').Router();
const moviesRouter = require('./moviesRoutes');
const tvRoutes = require('./tvRoutes');

router.use('/movies', moviesRouter)
router.use('/tv', tvRoutes)

module.exports = router

