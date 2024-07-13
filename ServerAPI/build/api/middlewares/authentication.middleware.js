import AuthenticationError from "../../application/errors/authentication.error";
import UnknownError from "../../application/errors/unknown.error";
import supabase from "../../config/supabase";
import AuthenticationProvider from './../../infrastructure/authentication/authentication.provider';
const expressAuthentication = async (request, securityName, scopes) => {
    if (!scopes)
        throw new UnknownError();
    return new Promise(async (resolve, reject) => {
        const bearer = (request.headers.Authorization ||
            request.headers.authorization ||
            "");
        if (!bearer)
            reject(new AuthenticationError());
        const token = bearer.split(" ")[1].trim();
        const authDetail = await ((new AuthenticationProvider(supabase())).verify({ token }));
        if (!authDetail)
            reject(new AuthenticationError());
        resolve(authDetail);
    });
};
export { expressAuthentication };
//# sourceMappingURL=authentication.middleware.js.map