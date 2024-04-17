import { request } from "express";
import { Get, Path, Post, Put, Route, Tags } from "tsoa";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import { FriendRequestService } from "../../application/services/friend.request.service";
import { prisma } from "../../config/prisma";
import FriendRepository from "../../infrastructure/repositories/friend.repository";
import FriendRequestRepository from "../../infrastructure/repositories/friend.request.repository";
import { ResponseSuccessType } from "../middlewares/response.middleware";

@Tags("Friend Request")
@Route("friendRequest")
export class FriendRequestController {
  @Post("{id}")
  public async createFriendRequest(@Path() id: string): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    const response = service.createFriendRequest(request.user as AuthDetailDTO, null, {
      id: id,
    });
    return response;
  }
  @Put("{id}")
  public async acceptFriendRequest(@Path() id: string): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    return service.acceptFriendRequest(request.user as AuthDetailDTO, null, {
      id: id,
    });
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
    return service.getFriendRequests(request.user as AuthDetailDTO, null, {
      pageSize: 10,
      pageNumber: 1,
    });
  }
}
