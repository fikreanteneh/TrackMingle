import { Request as ERequest } from "express";
import {
  Controller,
  Get,
  Path,
  Request,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import { FriendMinimalDTO } from "../../application/dtos/friend.dto";
import FriendService from "../../application/services/friend.service";
import {
  responseHandler,
  ResponseSuccessType,
} from "../middlewares/response.middleware";

@Tags("Friends")
@Route("{id}/friends")
@Security("BearerAuth")
export class FriendController extends Controller {
  private friendService: FriendService;
  constructor(friendService: FriendService) {
    super();
    this.friendService = friendService;
  }
  @Get("")
  @SuccessResponse("200")
  public async register(
    @Request() request: ERequest,
    @Path("id") id: string
  ): Promise<ResponseSuccessType<FriendMinimalDTO>> {
    const response = await this.friendService.getAllMyFriendsMinimal(
      request.user as AuthDetailDTO,
      null,
      { id: id }
    );
    return responseHandler<FriendMinimalDTO>(response);
  }
}
