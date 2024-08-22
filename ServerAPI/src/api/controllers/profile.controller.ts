import { Request as ERequest } from "express";
import {
  Body,
  Get,
  Put,
  Request,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import {
  UpdateFullNameDTO,
  UpdateLinksDTO,
  UpdateUsernameDTO,
  UserDTO,
  UserPersonalDTO,
} from "../../application/dtos/user.dto";
import ProfileService from "../../application/services/profile.service";
import { prisma } from "../../config/prisma";
import supabase from "../../config/supabase";
import AuthenticationProvider from "../../infrastructure/authentication/authentication.provider";
import UserRepository from "../../infrastructure/repositories/user.repository";

@Tags("Profile")
@Route("profile")
@Security("BearerAuth")
export class ProfileController {
  @Get("")
  @SuccessResponse("200")
  public async getProfile(
    @Request() request: ERequest
  ): Promise<UserPersonalDTO> {
    const service = new ProfileService(
      new UserRepository(prisma()),
      new AuthenticationProvider(supabase())
    );
    return await service.GetProfile(request.user as AuthDetailDTO, null, null);
  }

  // @Post("")
  // @SuccessResponse("201")
  // public async createProfile(
  //   @Request() request: ERequest,
  //   @Body() payload: UserCreateDTO
  // ): Promise<UserDTO> {
  //   const service = new ProfileService(
  //     new UserRepository(prisma()),
  //     new AuthenticationProvider(supabase())
  //   );
  //   return await service.CreateProfile(
  //     request.user as AuthDetailDTO,
  //     payload,
  //     null
  //   );
  // }

  @Put("update_links")
  @SuccessResponse("200")
  public async updateLinks(
    @Request() request: ERequest,
    @Body() payload: UpdateLinksDTO
  ): Promise<UserDTO> {
    const service = new ProfileService(
      new UserRepository(prisma()),
      new AuthenticationProvider(supabase())
    );
    return await service.UpdateLinks(
      request.user as AuthDetailDTO,
      payload,
      null
    );
  }

  @Put("update_username")
  @SuccessResponse("200")
  public async updateUsername(
    @Request() request: ERequest,
    @Body() payload: UpdateUsernameDTO
  ): Promise<UserDTO> {
    const service = new ProfileService(
      new UserRepository(prisma()),
      new AuthenticationProvider(supabase())
    );
    return await service.UpdateUsername(
      request.user as AuthDetailDTO,
      payload,
      null
    );
  }

  @Put("update_fullName")
  @Security("BearerAuth")
  @SuccessResponse("200")
  public async updateFullName(
    @Request() request: ERequest,
    @Body() payload: UpdateFullNameDTO
  ): Promise<UserDTO> {
    const service = new ProfileService(
      new UserRepository(prisma()),
      new AuthenticationProvider(supabase())
    );
    return await service.UpdateFullName(
      request.user as AuthDetailDTO,
      payload,
      null
    );
  }
}
