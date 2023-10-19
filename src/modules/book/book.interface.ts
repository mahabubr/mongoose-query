import { HydratedDocument, Model } from "mongoose";

interface IPublisher {
	name: string;
	location: string;
}

interface IReviews {
	user: string;
	comment: string;
}

export interface IBooks {
	title: string;
	author: string[];
	genre: string;
	publicationYear: number;
	publisher: IPublisher;
	reviews: Array<IReviews>;
	rating: number;
	price: string | number;
}

export interface IFBooks {
	title: string;
	author: string[];
	genre: string;
	publicationYear: number;
	publisher: IPublisher;
	reviews: Array<IReviews>;
	rating: number;
	price: string | number;
	featured: string;
}

export interface IBookModel extends Model<IBooks, {}, IFBooks> {
	getFeatured(): Promise<HydratedDocument<IBooks, IFBooks>>;
}
