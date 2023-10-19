import { Schema, model } from "mongoose";
import { IBookModel, IBooks } from "./book.interface";

const booksSchema = new Schema<IBooks>({
	title: { type: String, required: true },
	author: { type: [String], required: true },
	genre: { type: String, required: true },
	publicationYear: { type: Number, required: true },
	publisher: {
		name: String,
		location: String,
	},
	reviews: { type: [{ user: String, comment: String }], required: true },
	rating: Number,
	price: String || Number,
});

booksSchema.static("getFeatured", async function getFeatured() {
	const feature = this.aggregate([
		{
			$addFields: {
				featured: {
					$switch: {
						branches: [
							{
								case: {
									$and: [
										{
											$gte: ["$rating", 4],
										},
										{
											$lt: ["$rating", 4.5],
										},
									],
								},
								then: "Popular",
							},
							{
								case: {
									$gte: ["$rating", 4.5],
								},
								then: "Best Seller",
							},
						],
						default: "",
					},
				},
			},
		},
	]);
	return feature;
});

const book = model<IBooks, IBookModel>("Book", booksSchema);

export default book;
