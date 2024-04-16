import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";


import { RegisterRoutes } from "./api/routes/routes";
import swaggerDocument from "./api/swagger/swagger.json";
import { errorMiddleware } from "./api/middlewares/error.middleware";
import { AuthDetailDTO } from "./application/dtos/auth.dto";

declare global {
  namespace Express {
    interface Request {
      user: AuthDetailDTO | null; // or the type of your user
    }
  }
}

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use(authenticationMiddleware);
RegisterRoutes(app);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Read The Doc  http://localhost:${process.env.PORT}/api-docs`);
});
