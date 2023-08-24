export const loginFunctions = async (username, pass) => {
  try {
    const requestBody = {
      user: username,
      password: pass,
    };

    const response = await fetch('http://localhost:3000/authenticate', {
      method: 'POST', // Método POST
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido JSON
      },
      body: JSON.stringify(requestBody), // Convierte el objeto en JSON
    });
    const result = await response.json();
    if (response.ok) {
      response.status; // 200
      return result;
    } else {
      response.status; // 400
      return null;
    }

    // Procesar la respuesta aquí, por ejemplo:
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
    return null;
  }
};

export const register = async (username, password, email) => {
  try {
    const requestBody = {
      username: username,
      password: password,
      email: email,
      creationDate: new Date().toISOString(),
    };

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (response.ok) {
      localStorage.setItem('userMine', JSON.stringify(result));
    } else {
      throw new Error('Error al registrar');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
