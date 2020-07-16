const router = require('express').Router();
const MovieController = require('../controllers/movieController.js');

router.get('/movies', MovieController.findAll)
router.get('/movies/:id', MovieController.findById)
router.post('/movies', MovieController.create)
router.delete('/movies/:id', MovieController.findByIdAndDelete)
router.put('/movies/:id', MovieController.findByIdAndUpdate)

module.exports = router;