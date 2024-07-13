import { Request as ERequest } from "express";
import { Body, Post, Put, Request, Route, SuccessResponse, Tags } from "tsoa";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import {
  UpdateFullNameDTO,
  UpdateLinksDTO,
  UpdateUsernameDTO,
  UserCreateDTO,
  UserDTO,
} from "../../application/dtos/user.dto";
import ProfileService from "../../application/services/profile.service";
import { prisma } from "../../config/prisma";
import supabase from "../../config/supabase";
import AuthenticationProvider from "../../infrastructure/authentication/authentication.provider";
import UserRepository from "../../infrastructure/repositories/user.repository";

// @Tags("User")
// @Route("user")
// export class UserController {
//   // @Get("")
//   // @SuccessResponse("200")
//   // public async getProfile(
//   //   @Request() request: ERequest
//   // ): Promise<UserDTO> {
//   //   const service = new UserService(new UserRepository(prisma()));
//   //   return await service.GetUsers(null, null,);
//   // }

//   @Post("")
//   @SuccessResponse("201")
//   public async createProfile(
//     @Request() request: ERequest,
//     @Body() payload: UserCreateDTO
//   ): Promise<UserDTO> {
//     const service = new ProfileService(
//       new UserRepository(prisma()),
//       new AuthenticationProvider(supabase())
//     );
//     return await service.CreateProfile(
//       request.user as AuthDetailDTO,
//       payload,
//       null
//     );
//   }

//   @Put("updateFullName")
//   @SuccessResponse("200")
//   public async updateFullName(
//     @Request() request: ERequest,
//     @Body() payload: UpdateFullNameDTO
//   ): Promise<UserDTO> {
//     const service = new ProfileService(
//       new UserRepository(prisma()),
//       new AuthenticationProvider(supabase())
//     );
//     return await service.UpdateFullName(
//       request.user as AuthDetailDTO,
//       payload,
//       null
//     );
//   }

//   @Put("updateUsername")
//   @SuccessResponse("200")
//   public async updateUsername(
//     @Request() request: ERequest,
//     @Body() payload: UpdateUsernameDTO
//   ): Promise<UserDTO> {
//     const service = new ProfileService(
//       new UserRepository(prisma()),
//       new AuthenticationProvider(supabase())
//     );
//     return await service.UpdateUsername(
//       request.user as AuthDetailDTO,
//       payload,
//       null
//     );
//   }

//   @Put("updateLinks")
//   @SuccessResponse("200")
//   public async updateLinks(
//     @Request() request: ERequest,
//     @Body() payload: UpdateLinksDTO
//   ): Promise<UserDTO> {
//     const service = new ProfileService(
//       new UserRepository(prisma()),
//       new AuthenticationProvider(supabase())
//     );
//     return await service.UpdateLinks(
//       request.user as AuthDetailDTO,
//       payload,
//       null
//     );
//   }
// }
