import { request } from "express";
import { Get, Path, Post, Put, Route, Security, Tags } from "tsoa";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import { FriendRequestService } from "../../application/services/friend.request.service";
import { prisma } from "../../config/prisma";
import FriendRepository from "../../infrastructure/repositories/friend.repository";
import FriendRequestRepository from "../../infrastructure/repositories/friend.request.repository";
import { responseHandler, ResponseSuccessType } from "../middlewares/response.middleware";

@Tags("Friend Request")
@Route("friendRequest")
@Security("BearerAuth")
export class FriendRequestController {
  @Post("{id}")
  public async createFriendRequest(@Path() id: string): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    const response = await service.createFriendRequest(request.user as AuthDetailDTO, null, {
      id: id,
    });
    return responseHandler<any>(response);
  }
  @Put("{id}")
  public async acceptFriendRequest(@Path() id: string): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    const response = await service.acceptFriendRequest(request.user as AuthDetailDTO, null, { id: id });
    return responseHandler<any>(response);
  }

  @Get("sent")
  public async getSentFriendRequests(): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    return service.getSentFriendRequests(request.user as AuthDetailDTO, null, {
      pageSize: 10,
      pageNumber: 1,
    });
  }

  @Get("received")
  public async getFriendRequests(): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    const response = await service.getFriendRequests(request.user as AuthDetailDTO, null, {
      pageSize: 10,
      pageNumber: 1,
    });
    return responseHandler<any>(response);
  }
}
