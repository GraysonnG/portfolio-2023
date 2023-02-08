import { client } from '../api/sanityClient';

export async function load() {
	const data = await client.getHomeData();

	if (data) return { home: data };
	else
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
}
