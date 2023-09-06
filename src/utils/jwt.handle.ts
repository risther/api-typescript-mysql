import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"; //obtenemos nuestr JWT_Secret que es la firma del servidor

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {  //pasamos el id(podemos pasar algunos datos mas ) y nuestro payload
    expiresIn: "2h",// podemos dar un tiempo expiracion a nuestro  jwt
  });
  return jwt;
};

const verifyToken = (jwt: string) => { 
  const isOk = verify(jwt, JWT_SECRET);// verificamos el token con el jwt y la llave secreta del servidor
  return isOk;
};

export { generateToken, verifyToken };
