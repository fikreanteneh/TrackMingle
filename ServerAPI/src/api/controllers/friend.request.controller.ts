import { Request as ERequest } from "express";
import { Get, Path, Post, Put, Request, Route, Security, Tags } from "tsoa";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import { FriendRequestService } from "../../application/services/friend.request.service";
import { prisma } from "../../config/prisma";
import FriendRepository from "../../infrastructure/repositories/friend.repository";
import FriendRequestRepository from "../../infrastructure/repositories/friend.request.repository";
import {
  responseHandler,
  ResponseSuccessType,
} from "../middlewares/response.middleware";

@Tags("Friend Request")
@Route("friendRequest")
@Security("BearerAuth")
export class FriendRequestController {
  @Post("{id}")
  public async createFriendRequest(
    @Request() request: ERequest,
    @Path() id: string
  ): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    const response = await service.createFriendRequest(
      request.user as AuthDetailDTO,
      null,
      {
        id: id,
      }
    );
    return responseHandler<any>(response);
  }
  @Put("{id}")
  public async acceptFriendRequest(
    @Request() request: ERequest,
    @Path() id: string
  ): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    const response = await service.acceptFriendRequest(
      request.user as AuthDetailDTO,
      null,
      { id: id }
    );
    return responseHandler<any>(response);
  }

  @Get("sent")
  public async getSentFriendRequests(
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    return service.getSentFriendRequests(request.user as AuthDetailDTO, null, {
      pageSize: 100,
      pageNumber: 0,
    });
  }

  @Get("received")
  public async getFriendRequests(
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<any>> {
    const service = new FriendRequestService(
      new FriendRequestRepository(prisma()),
      new FriendRepository(prisma())
    );
    const response = await service.getFriendRequests(
      request.user as AuthDetailDTO,
      null,
      {
        pageSize: 100,
        pageNumber: 0,
      }
    );
    return responseHandler<any>(response);
  }
}
