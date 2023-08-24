const Login = require("../services/entities/login.entity");
const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: '5432',
    username: "postgres",
    password: "admin123",
    database: "chatServer",
    entities: [Login],
    synchronize: true,
    logging: false,
})

const loginRepository = AppDataSource.getRepository("Login")

module.exports = {
    AppDataSource,
    loginRepository,
}

