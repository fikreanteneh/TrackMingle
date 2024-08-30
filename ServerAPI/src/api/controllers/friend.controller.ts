import { Request as ERequest } from "express";
import {
  Controller,
  Get,
  Path,
  Request,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import { FriendMinimalDTO } from "../../application/dtos/friend.dto";
import FriendService from "../../application/services/friend.service";
import { prisma } from "../../config/prisma";
import FriendRepository from "../../infrastructure/repositories/friend.repository";
import {
  responseHandler,
  ResponseSuccessType,
} from "../middlewares/response.middleware";

@Tags("Friends")
@Route("{id}/friends")
export class FriendController extends Controller {
  @Get("")
  @SuccessResponse("200")
  public async register(
    @Request() request: ERequest,
    @Path("id") id: string
  ): Promise<ResponseSuccessType<FriendMinimalDTO>> {
    const service = new FriendService(new FriendRepository(prisma()));
    const response = await service.getAllMyFriendsMinimal(
      request.user as AuthDetailDTO,
      { id: id }
    );
    return responseHandler<FriendMinimalDTO>(response);
  }
}
