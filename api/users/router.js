const app = require('express')
const router = app.Router()
const {signup,login,getAllUsers,getUserByEmail,updateUserById,deleteUserById} = require('./controller')


router.post('/signup', signup)
router.post('/login', login)
router.get('/get-all-users', getAllUsers)
router.get('/get-user-by-email', getUserByEmail)
router.put('/update-user-id', updateUserById)
router.delete('/delete-user',deleteUserById)


module.exports = router