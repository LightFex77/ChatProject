const {getUsersService, insertUsersService, authenticateUserService} = require("../services/login.service");
const jwt = require("jsonwebtoken")   
const getUsersController = async (req, res) => {
    const users = await getUsersService();

    res.status(200).json({
        usuarios: users
    })
}

const insertUsersControllers = async (req, res) => {
    const {username, password, email, creationDate} = req.body;

    const newUser = await insertUsersService(username, password, email, creationDate);

    if (newUser) {
        // El usuario se registró con éxito
        const token = jwt.sign(
          {
            userId: newUser.id,
            userName: newUser.username,
            userEmail: newUser.email
          },
          "admin123"
        );
  
        res.status(200).json({user: newUser, token });
      } else {
        res.status(500).json({ message: 'No se pudo completar el registro' });
      }
}

const authenticateUserController = async (req, res) => {
    const { user, password } = req.body;

    try {
        const authenticatedUser = await authenticateUserService(user, password);

        if (authenticatedUser) {
            // El usuario se autenticó con éxito
            const token = jwt.sign(
                {
                    userId: authenticatedUser.id,
                    userName: authenticatedUser.username,
                    userEmail: authenticatedUser.email
                },
                "admin123",
            )
            return res.status(200).json({ user: authenticatedUser, token });
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