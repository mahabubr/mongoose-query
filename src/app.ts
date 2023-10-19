import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";
import router from "./modules/book/book.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/book", router);

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

export default app;
