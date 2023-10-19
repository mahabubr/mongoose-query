import mongoose from "mongoose";
const port: number = 5000;
import app from "./app";

// Database Connection

async function main() {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/assignment");
		console.log("database connection successful");

		app.listen(port, () => {
			console.log(`Server Running on PORT : ${port}`);
		});
	} catch (e) {
		console.log("Failed To Connect Database");
	}
}

main();
