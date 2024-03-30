import { Request as ERequest } from "express";
import {
  Body,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Request,
  Route,
  Security,
  Tags,
} from "tsoa";
import { AuthenticatedOrganizer } from "types/token.types";
import { db } from "../../config/database";
import { responseHandler } from "../../middlewares/response.middleware";
import Event from "../../models/event.model";
import EventRepository from "../../repositories/friend.request.repository";
import { ResponseSuccessType } from "../../types/request.types";
import EventService from "./user.service";
import { EventCreateRequest, EventUpdateNameRequest } from "./user.types";

const database = db();

@Tags("Event Services")
@Route("events")
export class EventController {
  @Security("BearerAuth", ["token", "organizer"])
  @Post("/")
  public async createEvent(
    @Request() request: ERequest,
    @Body() requestBody: EventCreateRequest
  ): Promise<ResponseSuccessType<Event>> {
    const service = new EventService(new EventRepository(database));
    const response = await service.createEvent(
      requestBody,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(response);
  }

  @Security("BearerAuth", ["token", "organizer"])
  @Delete("{id}")
  public async deleteEvent(
    @Path() id: string,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Event>> {
    const service = new EventService(new EventRepository(database));
    const response = await service.deleteEvent(
      id,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(response);
  }

  @Security("BearerAuth", ["token", "organizer"])
  @Put("{id}")
  public async updateEvent(
    @Path() id: string,
    @Body() requestBody: EventUpdateNameRequest,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Event | null>> {
    const service = new EventService(new EventRepository(database));
    const response = await service.updateEvent(
      id,
      requestBody,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(response);
  }

  @Get("/organizer/{id}")
  public async getEventByOrganizer(
    @Path() id: string,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Event[]>> {
    const service = new EventService(new EventRepository(database));
    const response = await service.getEventByOrganizer(
      id,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(response);
  }

  @Get("/all")
  public async getAllEvents(
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Event[]>> {
    const service = new EventService(new EventRepository(database));
    const response = await service.getAllEvents(
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(response);
  }

  @Get("{id}")
  public async getEventById(
    @Path() id: string,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Event>> {
    const service = new EventService(new EventRepository(database));
    const response = await service.getEventById(
      id,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(response);
  }
}
