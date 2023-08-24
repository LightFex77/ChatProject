const { loginRepository } = require('../utils/connection');

const getUsersService = async () => {
    const result = await loginRepository.find();

    return result.rows;
}

const insertUsersService = async (username, password, email, creationDate) => {
    const result = await loginRepository.save({
        username,
        email,
        password,
        createdAt: creationDate,
    })

    console.log({ result })

    const authenticate = authenticateUserService(username, password)
    return authenticate;
}

const authenticateUserService = async (user, password) => {

    const result = await loginRepository.findOne({
        where: {
            username: user,
            password: password,
        }
    })


    return result
}

module.exports = {
    getUsersService,
    insertUsersService,
    authenticateUserService
}