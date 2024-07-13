export const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    let finalResponse = {
        success: false,
        error: err.message,
        response: null,
    };
    res.status(500).json(finalResponse);
};
export const catchError = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
//# sourceMappingURL=error.middleware.js.map