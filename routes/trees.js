const { Router } = require('express')
const { post_tree, get_trees, get_tree } = require('../controllers/trees_controller')
const router = Router()


router.post('/', post_tree)

router.get('/', get_trees)

router.get('/:parameter', get_tree)
 
module.exports = router
