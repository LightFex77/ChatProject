const {getUsersController, insertUsersControllers, authenticateUserController} = require('../controllers/login.controller');

const {Router} = require('express');

const router = Router();

router.get("/login", getUsersController);

router.post("/login", insertUsersControllers);

router.post('/authenticate', authenticateUserController);

module.exports = router