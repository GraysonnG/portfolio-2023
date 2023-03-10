// @ts-nocheck
import { client } from '../../api/sanityClient';

export const actions = {
	default: async ({ request }) => {
		console.log(await request.formData());
	}
};

export async function load() {
	const data = await client.getContactData();

	if (data) return data;
	else
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
}
