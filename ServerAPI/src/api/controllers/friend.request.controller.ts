import { Request as ERequest } from "express";
import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Query,
  Request,
  Route,
  Security,
  Tags,
} from "tsoa";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import {
  FriendRequestCreateDTO,
  FriendRequestDetailDTO,
} from "../../application/dtos/friend.request.dto";
import { FriendRequestService } from "../../application/services/friend.request.service";
import {
  responseHandler,
  ResponseSuccessType,
} from "../middlewares/response.middleware";

@Tags("Friend Request")
@Route("friend_request")
@Security("BearerAuth")
export class FriendRequestController extends Controller {
  private friendRequestService: FriendRequestService;
  constructor(friendRequestService: FriendRequestService) {
    super();
    this.friendRequestService = friendRequestService;
  }
  @Post("")
  public async createFriendRequest(
    @Request() request: ERequest,
    @Body() body: FriendRequestCreateDTO
  ): Promise<ResponseSuccessType<null>> {
    const response = await this.friendRequestService.createFriendRequest(
      request.user as AuthDetailDTO,
      body,
      null
    );
    return responseHandler<null>(response);
  }
  @Put("{id}")
  public async acceptFriendRequest(
    @Request() request: ERequest,
    @Path() id: string
  ): Promise<ResponseSuccessType<null>> {
    const response = await this.friendRequestService.acceptFriendRequest(
      request.user as AuthDetailDTO,
      null,
      { id: id }
    );
    return responseHandler<null>(response);
  }

  @Delete("{id}")
  public async rejectFriendRequest(
    @Request() request: ERequest,
    @Path() id: string
  ): Promise<ResponseSuccessType<null>> {
    const response = await this.friendRequestService.rejectFriendRequest(
      request.user as AuthDetailDTO,
      null,
      { id: id }
    );
    return responseHandler<null>(response);
  }

  @Get("sent")
  public async getSentFriendRequests(
    @Request() request: ERequest,
    @Query() page: number,
    @Query() size: number
  ): Promise<ResponseSuccessType<FriendRequestDetailDTO>> {
    const response = await this.friendRequestService.getSentFriendRequests(
      request.user as AuthDetailDTO,
      null,
      {
        pageSize: size ?? 50,
        pageNumber: page ?? 0,
      }
    );
    return responseHandler<FriendRequestDetailDTO>(response);
  }

  @Get("received")
  public async getFriendRequests(
    @Request() request: ERequest,
    @Query() page: number,
    @Query() size: number
  ): Promise<ResponseSuccessType<any>> {
    const response = await this.friendRequestService.getFriendRequests(
      request.user as AuthDetailDTO,
      null,
      {
        pageSize: size ?? 50,
        pageNumber: page ?? 0,
      }
    );
    return responseHandler<FriendRequestDetailDTO>(response);
  }
}
