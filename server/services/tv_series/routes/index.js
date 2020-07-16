const router = require('express').Router();
const TvSerieController = require('../controllers/tvSerieController.js');

router.get('/tv', TvSerieController.findAll)
router.get('/tv/:id', TvSerieController.findById)
router.post('/tv', TvSerieController.create)
router.delete('/tv/:id', TvSerieController.findByIdAndDelete)
router.put('/tv/:id', TvSerieController.findByIdAndUpdate)

module.exports = router;