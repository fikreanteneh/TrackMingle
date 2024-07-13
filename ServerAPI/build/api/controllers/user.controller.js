export {};
// @Tags("User")
// @Route("user")
// export class UserController {
//   // @Get("")
//   // @SuccessResponse("200")
//   // public async getProfile(
//   //   @Request() request: ERequest
//   // ): Promise<UserDTO> {
//   //   const service = new UserService(new UserRepository(prisma()));
//   //   return await service.GetUsers(null, null,);
//   // }
//   @Post("")
//   @SuccessResponse("201")
//   public async createProfile(
//     @Request() request: ERequest,
//     @Body() payload: UserCreateDTO
//   ): Promise<UserDTO> {
//     const service = new ProfileService(
//       new UserRepository(prisma()),
//       new AuthenticationProvider(supabase())
//     );
//     return await service.CreateProfile(
//       request.user as AuthDetailDTO,
//       payload,
//       null
//     );
//   }
//   @Put("updateFullName")
//   @SuccessResponse("200")
//   public async updateFullName(
//     @Request() request: ERequest,
//     @Body() payload: UpdateFullNameDTO
//   ): Promise<UserDTO> {
//     const service = new ProfileService(
//       new UserRepository(prisma()),
//       new AuthenticationProvider(supabase())
//     );
//     return await service.UpdateFullName(
//       request.user as AuthDetailDTO,
//       payload,
//       null
//     );
//   }
//   @Put("updateUsername")
//   @SuccessResponse("200")
//   public async updateUsername(
//     @Request() request: ERequest,
//     @Body() payload: UpdateUsernameDTO
//   ): Promise<UserDTO> {
//     const service = new ProfileService(
//       new UserRepository(prisma()),
//       new AuthenticationProvider(supabase())
//     );
//     return await service.UpdateUsername(
//       request.user as AuthDetailDTO,
//       payload,
//       null
//     );
//   }
//   @Put("updateLinks")
//   @SuccessResponse("200")
//   public async updateLinks(
//     @Request() request: ERequest,
//     @Body() payload: UpdateLinksDTO
//   ): Promise<UserDTO> {
//     const service = new ProfileService(
//       new UserRepository(prisma()),
//       new AuthenticationProvider(supabase())
//     );
//     return await service.UpdateLinks(
//       request.user as AuthDetailDTO,
//       payload,
//       null
//     );
//   }
// }
//# sourceMappingURL=user.controller.js.map