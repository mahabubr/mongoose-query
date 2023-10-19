import { IBooks } from "./book.interface";
import book from "./book.model";

export const createBooksDB = async (payload: IBooks) => {
	const books = await new book(payload);
	await books.save();
	return books;
};

export const findByGenreDB = async (id: string | number) => {
	const genreFan = book.find({ genre: id });
	return genreFan;
};

export const findByGenreDB2 = async () => {
	const genreFan2 = book.aggregate([
		{ $match: { genre: "Sci-Fi" } },
		{ $match: { "publisher.name": "Roli Books" } },
	]);
	return genreFan2;
};

export const customizedRattingDB = async () => {
	const ratting = book.getFeatured();
	return ratting;
};

export const changePriceStringToIntDB = async () => {
	const priceResult = await book.updateMany(
		{
			publicationYear: { $gt: 2020 },
			price: { $type: "string" },
		},
		[
			{
				$set: {
					price: { $toInt: "$price" },
				},
			},
		]
	);

	return priceResult;
};
