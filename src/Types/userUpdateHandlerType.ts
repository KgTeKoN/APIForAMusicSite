export type userUpdateHandlerType = (
	name: string,
	email: string,
	password: string,
	isAuthor: string,
	id: string,
) => Promise<any>;
