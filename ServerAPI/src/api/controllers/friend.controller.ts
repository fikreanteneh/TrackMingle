import { Request as ERequest } from "express";
import {
  Controller,
  Get,
  Path,
  Query,
  Request,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { injectable } from "tsyringe";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import { FriendMinimalDTO } from "../../application/dtos/friend.dto";
import FriendService from "../../application/services/friend.service";
import {
  responseHandler,
  ResponseSuccessType,
} from "../middlewares/response.middleware";
@injectable()
@Tags("Friends")
@Route("friends")
@Security("BearerAuth")
export class FriendController extends Controller {
  private friendService: FriendService;
  constructor(friendService: FriendService) {
    super();
    this.friendService = friendService;
  }
  @Get("")
  @SuccessResponse("200")
  public async getMyFriends(
    @Request() request: ERequest,
    @Query() page: number,
    @Query() size: number
  ): Promise<ResponseSuccessType<FriendMinimalDTO>> {
    const response = await this.friendService.getAllMyFriendsMinimal(
      request.user as AuthDetailDTO,
      null,
      { pageNumber: page, pageSize: size },

    );
    return responseHandler<FriendMinimalDTO>(response);
  }


  @Get("{id}")
  @SuccessResponse("200")
  public async getFriendsByID(
    @Request() request: ERequest,
    @Path("id") id: string,
    @Query() page: number,
    @Query() size: number
  ): Promise<ResponseSuccessType<FriendMinimalDTO>> {
    const response = await this.friendService.getAllFriendsMinimal(
      request.user as AuthDetailDTO,
      null,
      { id: id, pageNumber: page, pageSize: size }
    );
    return responseHandler<FriendMinimalDTO>(response);
  }
}
