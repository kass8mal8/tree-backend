const { Router } = require('express')
const { post_user, get_users } = require('../controllers/users_controller')
const router = Router()

router.post('/', post_user)
router.get('/', get_users)

module.exports = router