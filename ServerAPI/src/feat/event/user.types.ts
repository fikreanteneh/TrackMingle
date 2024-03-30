export interface EventMain {
  name: string;
  date: Date;
  lat: number;
  long: number;
}

export interface EventCreateRequest extends EventMain {}

export interface EventUpdateNameRequest extends EventMain {}

export interface EventResponse extends EventMain {
  id: string;
  organizer_id: string;
}
