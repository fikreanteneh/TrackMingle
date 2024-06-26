// export const responseHandler = (req: Request, res: Response, response: any) => {
//   let finalResponse = {
//     success: true,
//     error: null,
//     response: response,
//   };

//   if (req.method === "GET") {
//     res.status(200).json(finalResponse);
//   } else if (req.method === "POST") {
//     res.status(201).json(finalResponse);
//   } else if (req.method === "PUT") {
//     res.status(201).json(finalResponse);
//   } else if (req.method === "DELETE") {
//     res.status(200).json(finalResponse);
//   }
// };

export const responseHandler = <T>(data: T) => {
  return {
    success: true,
    error: null,
    response: data,
  };
};


export interface ResponseSuccessType<T> { 
  success: boolean;
  error: null;
  response: T;
}