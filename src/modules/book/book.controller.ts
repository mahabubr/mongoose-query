import { Request, Response } from "express";
import {
	changePriceStringToIntDB,
	createBooksDB,
	customizedRattingDB,
	findByGenreDB,
	findByGenreDB2,
} from "./book.services";

export const createBook = async (req: Request, res: Response) => {
	const data = req.body;
	const setBook = await createBooksDB(data);
	res.status(200).json({ status: 200, data: setBook });
};

export const genreFantasy = async (req: Request, res: Response) => {
	const id = req.params.id;
	const fantasy = await findByGenreDB(id);
	res.status(200).json({ status: 200, data: fantasy });
};

export const genreFantasy2 = async (req: Request, res: Response) => {
	const fantasy = await findByGenreDB2();
	res.status(200).json({ status: 200, data: fantasy });
};

export const customizedRatting = async (req: Request, res: Response) => {
	const resultRatting = await customizedRattingDB();
	res.status(200).json({ status: 200, data: resultRatting });
};

export const changePriceStringToInt = async (req: Request, res: Response) => {
	const resultPrice = await changePriceStringToIntDB();
	res.status(200).json({ status: 200, data: resultPrice });
};
