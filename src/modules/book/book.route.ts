import express from "express";
import {
	changePriceStringToInt,
	createBook,
	customizedRatting,
	genreFantasy,
	genreFantasy2,
} from "./book.controller";

const router = express.Router();

// Task 1:
router.post("/create-book", createBook);

// Task 2:
router.get("/genre-fan/:id", genreFantasy);

// Task 3:
router.get("/genre-fan2", genreFantasy2);

// Task 4: 
router.get("/featured", customizedRatting);

// Task 5: 
router.get("/price", changePriceStringToInt);

export default router;
