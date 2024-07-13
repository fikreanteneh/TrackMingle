import jwt from "jsonwebtoken";
export const encodeToken = (payload) => {
    const token = jwt.sign(payload, `${process.env.JWT_SECRET}`, {
        expiresIn: `${process.env.JWT_EXPIRATION}`,
    });
    return token;
};
export const decodeToken = (token) => {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    if (!decoded) {
        throw new Error("Invalid token");
    }
    return { id: decoded.id, email: decoded.email };
};
//# sourceMappingURL=tokens.js.map