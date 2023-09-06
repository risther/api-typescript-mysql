import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 8); //la promesa has necesita de 2 params, contraseña:string   y el nivel de encriptacion 8-10 normalmente, puede subir
  return passwordHash;
};

const verified = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash);// comparamos al contraseña que ingreso en el formulario con la encriptada
  return isCorrect;
};

export { encrypt, verified };
