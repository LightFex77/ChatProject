const { getUsersController, insertUsersControllers, authenticateUserController } = require('../controllers/login.controller');

const { Router } = require('express');

const router = Router();

// Es un endpoint de prueba
router.get("/login", getUsersController);

router.post("/login", insertUsersControllers);

router.post('/authenticate', authenticateUserController);

module.exports = router