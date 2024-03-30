// import { z } from "zod";
// import AuthorizationError from "../../errors/authorization.errors";
// import NotFoundError from "../../errors/notfound.error";
// import ValidationError from "../../errors/validation.error";
// import Event from "../../models/event.model";
// import { AuthenticationToken } from "../../types/token.types";
// import { EventMain } from "./event.types";

// export const authorizationValidation = (
//   event: Event,
//   user: AuthenticationToken
// ) => {
//   if (event.id != user.id) throw new AuthorizationError();
// };

// export const existValidation = (event: Event | null) => {
//   if (!event) throw new NotFoundError();
// };

// const EventMainSchema = z.object({
//   name: z.string().min(5),
//   date: z.date(),
//   lat: z.number().min(-90).max(90),
//   long: z.number().min(-180).max(180),
// });

// export const dataValidation = (event: EventMain) => {
//   const result = EventMainSchema.safeParse(event);
//   if (!result.success) {
//     const firstError = result.error.issues[0];
//     const fieldName = firstError.path[0];
//     throw new ValidationError(`Invalid or missing field: ${fieldName}`);
//   }
//   return result.data;
// };
