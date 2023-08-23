const {getUsersService, insertUsersService, authenticateUserService} = require("../services/login.service");

const getUsersController = async (req, res) => {
    const users = await getUsersService();

    res.status(200).json({
        usuarios: users
    })
}

const insertUsersControllers = async (req, res) => {
    const {username, password, email, creationDate} = req.body;

    const newUser = await insertUsersService(username, password, email, creationDate);

    res.status(200).json({
        usuarios: newUser
    })
}

const authenticateUserController = async (req, res) => {
    const { user, password } = req.body;

    try {
        const authenticatedUser = await authenticateUserService(user, password);

        if (authenticatedUser) {
            // El usuario se autenticó con éxito
            res.status(200).json({ message: 'Autenticación exitosa', user: authenticatedUser });
        } else {
            // Usuario no autenticado (credenciales incorrectas)
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


module.exports = {
    getUsersController,
    insertUsersControllers,
    authenticateUserController
}