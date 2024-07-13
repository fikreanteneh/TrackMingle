var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
// import { responseHandler } from "src/middlewares/response.middleware";
import { Body, Controller, Post, Route, SuccessResponse, Tags } from "tsoa";
import { AuthDTO } from "../../application/dtos/auth.dto";
import AuthService from "../../application/services/auth.service";
import { responseHandler, } from "../middlewares/response.middleware";
import { injectable } from "tsyringe";
let AuthController = class AuthController extends Controller {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async register(requestBody) {
        // const service = new AuthService(
        //   new AuthenticationProvider(supabase()),
        //   new UserRepository(prisma())
        // );
        const response = await this.authService.register(null, requestBody, null);
        return responseHandler(response);
    }
    async login(requestBody) {
        // const service = new AuthService(
        //   new AuthenticationProvider(supabase()),
        //   new UserRepository(prisma())
        // );
        const response = await this.authService.login(null, requestBody, null);
        return responseHandler(response);
    }
};
__decorate([
    Post("register"),
    SuccessResponse("201"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof AuthDTO !== "undefined" && AuthDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    Post("login"),
    SuccessResponse("200"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof AuthDTO !== "undefined" && AuthDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    injectable(),
    Tags("Authentication"),
    Route("auth"),
    __metadata("design:paramtypes", [typeof (_a = typeof AuthService !== "undefined" && AuthService) === "function" ? _a : Object])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map