/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProfileController } from './../controllers/profile.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FriendRequestController } from './../controllers/friend.request.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FriendController } from './../controllers/friend.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from './../controllers/auth.controller';
import { expressAuthentication } from './../middlewares/authentication.middleware';
// @ts-ignore - no great way to install types from subpackage
import { iocContainer } from './../iocModule';
const expressAuthenticationRecasted = expressAuthentication;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "FriendRequestDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "senderId": { "dataType": "string", "required": true },
            "receiverId": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "username": { "dataType": "string", "required": true },
            "fullName": { "dataType": "string" },
            "profilePicture": { "dataType": "string" },
            "twitter": { "dataType": "string" },
            "linkedin": { "dataType": "string" },
            "facebook": { "dataType": "string" },
            "instagram": { "dataType": "string" },
            "phoneNumber": { "dataType": "string" },
            "createdAt": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserPersonalDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "username": { "dataType": "string", "required": true },
            "fullName": { "dataType": "string" },
            "profilePicture": { "dataType": "string" },
            "twitter": { "dataType": "string" },
            "linkedin": { "dataType": "string" },
            "facebook": { "dataType": "string" },
            "instagram": { "dataType": "string" },
            "phoneNumber": { "dataType": "string" },
            "createdAt": { "dataType": "datetime", "required": true },
            "SentRequests": { "dataType": "array", "array": { "dataType": "refObject", "ref": "FriendRequestDTO" } },
            "ReceivedRequests": { "dataType": "array", "array": { "dataType": "refObject", "ref": "FriendRequestDTO" } },
            "Friends": { "dataType": "array", "array": { "dataType": "refObject", "ref": "UserDTO" } },
            "updatedAt": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserCreateDTO": {
        "dataType": "refObject",
        "properties": {
            "username": { "dataType": "string", "required": true },
            "fullName": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateLinksDTO": {
        "dataType": "refObject",
        "properties": {
            "twitter": { "dataType": "string" },
            "linkedin": { "dataType": "string" },
            "facebook": { "dataType": "string" },
            "instagram": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateUsernameDTO": {
        "dataType": "refObject",
        "properties": {
            "username": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateFullNameDTO": {
        "dataType": "refObject",
        "properties": {
            "fullName": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponseSuccessType_any_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "response": { "dataType": "any", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FriendMinimalDTO": {
        "dataType": "refObject",
        "properties": {
            "friends": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponseSuccessType_FriendMinimalDTO_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "response": { "ref": "FriendMinimalDTO", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthTokenDTO": {
        "dataType": "refObject",
        "properties": {
            "token": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponseSuccessType_AuthTokenDTO_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "response": { "ref": "AuthTokenDTO", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthDTO": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras" });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
export function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/profile', authenticateMiddleware([{ "BearerAuth": [] }]), ...(fetchMiddlewares(ProfileController)), ...(fetchMiddlewares(ProfileController.prototype.getProfile)), async function ProfileController_getProfile(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(ProfileController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'getProfile',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/profile', authenticateMiddleware([{ "BearerAuth": [] }]), ...(fetchMiddlewares(ProfileController)), ...(fetchMiddlewares(ProfileController.prototype.createProfile)), async function ProfileController_createProfile(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            payload: { "in": "body", "name": "payload", "required": true, "ref": "UserCreateDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(ProfileController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'createProfile',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/profile/updateLinks', authenticateMiddleware([{ "BearerAuth": [] }]), ...(fetchMiddlewares(ProfileController)), ...(fetchMiddlewares(ProfileController.prototype.updateLinks)), async function ProfileController_updateLinks(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            payload: { "in": "body", "name": "payload", "required": true, "ref": "UpdateLinksDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(ProfileController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'updateLinks',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/profile/updateUsername', authenticateMiddleware([{ "BearerAuth": [] }]), ...(fetchMiddlewares(ProfileController)), ...(fetchMiddlewares(ProfileController.prototype.updateUsername)), async function ProfileController_updateUsername(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            payload: { "in": "body", "name": "payload", "required": true, "ref": "UpdateUsernameDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(ProfileController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'updateUsername',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/profile/updateFullName', authenticateMiddleware([{ "BearerAuth": [] }]), ...(fetchMiddlewares(ProfileController)), ...(fetchMiddlewares(ProfileController.prototype.updateFullName)), async function ProfileController_updateFullName(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            payload: { "in": "body", "name": "payload", "required": true, "ref": "UpdateFullNameDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(ProfileController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'updateFullName',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/friendRequest/:id', authenticateMiddleware([{ "BearerAuth": [] }]), ...(fetchMiddlewares(FriendRequestController)), ...(fetchMiddlewares(FriendRequestController.prototype.createFriendRequest)), async function FriendRequestController_createFriendRequest(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(FriendRequestController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'createFriendRequest',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/friendRequest/:id', authenticateMiddleware([{ "BearerAuth": [] }]), ...(fetchMiddlewares(FriendRequestController)), ...(fetchMiddlewares(FriendRequestController.prototype.acceptFriendRequest)), async function FriendRequestController_acceptFriendRequest(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(FriendRequestController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'acceptFriendRequest',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/friendRequest/sent', authenticateMiddleware([{ "BearerAuth": [] }]), ...(fetchMiddlewares(FriendRequestController)), ...(fetchMiddlewares(FriendRequestController.prototype.getSentFriendRequests)), async function FriendRequestController_getSentFriendRequests(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(FriendRequestController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'getSentFriendRequests',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/friendRequest/received', authenticateMiddleware([{ "BearerAuth": [] }]), ...(fetchMiddlewares(FriendRequestController)), ...(fetchMiddlewares(FriendRequestController.prototype.getFriendRequests)), async function FriendRequestController_getFriendRequests(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(FriendRequestController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'getFriendRequests',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/:id/friends', ...(fetchMiddlewares(FriendController)), ...(fetchMiddlewares(FriendController.prototype.register)), async function FriendController_register(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(FriendController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'register',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/auth/register', ...(fetchMiddlewares(AuthController)), ...(fetchMiddlewares(AuthController.prototype.register)), async function AuthController_register(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "AuthDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(AuthController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'register',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/auth/login', ...(fetchMiddlewares(AuthController)), ...(fetchMiddlewares(AuthController.prototype.login)), async function AuthController_login(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "AuthDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const container = typeof iocContainer === 'function' ? iocContainer(request) : iocContainer;
            const controller = await container.get(AuthController);
            if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
            }
            templateService.apiHandler({
                methodName: 'login',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security = []) {
        return async function runAuthenticationMiddleware(request, response, next) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts = [];
            const pushAndRethrow = (error) => {
                failedAttempts.push(error);
                throw error;
            };
            const secMethodOrPromises = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises = [];
                    for (const name in secMethod) {
                        secMethodAndPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                }
                else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                }
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            try {
                request['user'] = await Promise.any(secMethodOrPromises);
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next();
            }
            catch (err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map