export interface PhotoModel {
	id: number;
	categoryId?: number;
	src?: string;
	userId: number;
	likes: number;
}
