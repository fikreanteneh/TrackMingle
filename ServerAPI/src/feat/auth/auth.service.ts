import {
  Auth,
  AuthBase,
  AuthLogin,
  AuthLoginSuccess,
  EnumRole,
} from "models/auth.model";
import AuthRepository from "repositories/auth.repository";
import UserRepository from "repositories/user.repository";
import { encodeToken } from "utils/tokens";
import { comparePassword, hashPassword } from "./../../utils/password";

export default class AuthServices {
  private authRepository: AuthRepository;
  private userRepository: UserRepository;

  constructor(authRepository: AuthRepository, userRepository: UserRepository) {
    this.authRepository = authRepository;
    this.userRepository = userRepository;
  }

  async register(payload: AuthBase): Promise<AuthLoginSuccess> {
    const prevAuth = await this.authRepository.getByEmail(payload.email);
    const prevUser = await this.userRepository.getByUsername(payload.username);
    if (prevAuth) throw new Error("Email already exists");
    if (prevUser) throw new Error("Username already exists");
    const id = crypto.randomUUID();
    const [auth, user] =
      await this.authRepository.executeTransaction([
        this.authRepository.create({
          ...payload,
          role: EnumRole.USER,
          password: await hashPassword(payload.password),
          id,
        }),
        this.userRepository.create({
          id: id,
          username: payload.username,
        }),
      ]);

    const token = encodeToken({
      id: id,
      email: payload.email,
      role: EnumRole.USER,
    });
    return { token };
  }

  async login(payload: AuthLogin): Promise<AuthLoginSuccess> {
    const user = await this.authRepository.getByEmail(payload.email);
    if (!user) throw new Error("User not found");
    const isPasswordValid = await comparePassword(
      payload.password,
      user.password
    );
    if (!isPasswordValid) throw new Error("Invalid password");
    const token = encodeToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    return { token };
  }
}
