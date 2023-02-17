import { client } from '../../api/sanityClient';

export async function load() {
	const data = await client.getAboutData();

	if (data) return data;
	else
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
}
