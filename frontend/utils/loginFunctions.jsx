export const loginFunctions = async (username, pass, navigate) => {
    try {
      const requestBody = {
        user: username,
        password: pass,
      };
  
      const response = await fetch("http://localhost:3000/authenticate", {
        method: "POST", // Método POST
        headers: {
          "Content-Type": "application/json", // Tipo de contenido JSON
        },
        body: JSON.stringify(requestBody), // Convierte el objeto en JSON
      });
  const result = await response.json();
      if (response.ok) {
        localStorage.setItem("usuario", JSON.stringify(result));
        navigate("chat-room");
      }
  
      // Procesar la respuesta aquí, por ejemplo:
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  export const register = async (username, password, email, navigate) => {
try{
  const requestBody = {
    username: username,
    password: password,
    email: email,
    creationDate : new Date().toISOString()
  }

  const response = await fetch("http://localhost:3000/login", {
    method : "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(requestBody)
  });

  if(response.ok){
    navigate("/chat-room")
  }
}catch(error){
  console.error("Error:", error)
}


  }
  