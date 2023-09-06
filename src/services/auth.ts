import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });//Verificamos si hay existe algun email parecido
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password); //TODO 12345678
  const registerNewUser = await UserModel.create({ //mandamos un objeto desde el body
    email, 
    password: passHash,
    name,
  });
  //TODO 123456
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password; //TODO el encriptado!
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.email);//generams el token con nuestro estrin email 
  const data = {
    token,
    user: checkIs,
  };
  return data;
};

export { registerNewUser, loginUser };
