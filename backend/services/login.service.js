const connection = require('../utils/connection');

const getUsersService = async () => {
    const query = 
    `
    SELECT username, password, email, "creationDate"
	FROM public.login;
    `
    const result = await connection.query(query);

    return result.rows;
}

const insertUsersService = async (username, password, email, creationDate) => {
    const query = 
    `
    INSERT INTO public.login(
        username, password, email, "creationDate")
        VALUES ($1, $2, $3, $4);
    `;
    const values = [username, password, email, creationDate];

    const result = await connection.query(query, values);

    return result.rows
}

const authenticateUserService = async (user, password) => {
    const query = `
        SELECT *
        FROM public.login
        WHERE (username = $1 OR email = $1) AND password = $2;
    `;

    const values = [user, password];

    const result = await connection.query(query, values);

    return result.rows[0]; // Devuelve el usuario autenticado o null si no se encuentra
}

module.exports = {
    getUsersService,
    insertUsersService,
    authenticateUserService
}