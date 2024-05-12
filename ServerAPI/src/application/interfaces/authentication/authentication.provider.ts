import {
  AuthDetailDTO,
  AuthDTO,
  AuthTokenDTO,
  UserMetadataCustom,
} from "../../dtos/auth.dto";

export interface IAuthenticationProvider {
  signIn(payload: AuthDTO): Promise<AuthTokenDTO>;
  register(payload: AuthDTO): Promise<AuthTokenDTO>;
  verify(payload: AuthTokenDTO): Promise<AuthDetailDTO>;
  updateMetadata(authId: string, payload: UserMetadataCustom): Promise<null>;
}
