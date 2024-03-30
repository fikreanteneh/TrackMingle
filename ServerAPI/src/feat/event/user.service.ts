import UserRepository from "repositories/user.repository";


export default class UserServices {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async update(
    id: string,
    payload: EventUpdateRequest,
    user: AuthenticatedOrganizer
  ) {
    const event = (await this.eventRepository.getById(id)) as unknown as Event;
    existValidation(event);
    authorizationValidation(event, user);
    dataValidation(payload);
    return await this.eventRepository.update(id, {
      id: id,
      lat: payload.lat,
      long: payload.long,
      name: payload.name,
      date: payload.date,
    });
  }

  async deleteEvent(id: string, user: AuthenticatedOrganizer) {
    const event = await this.eventRepository.getById(id);
    existValidation(event);
    authorizationValidation(event as any, user);
    return await this.eventRepository.delete(id);
  }

  async getEventById(id: string, user: AuthenticatedOrganizer) {
    const event = await this.eventRepository.getById(id);
    existValidation(event);
    return event;
  }

  async getEventByOrganizer(organizerid: string, user: AuthenticatedOrganizer) {
    return await this.eventRepository.getEventsByOrganizerId(organizerid);
  }

  async getAllEvents(user: AuthenticatedOrganizer) {
    return await this.eventRepository.getAll();
  }
}
