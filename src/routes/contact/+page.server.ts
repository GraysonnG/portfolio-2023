// @ts-nocheck
import { client } from '../../api/sanityClient';

export const prerender = true

export async function load() {
	const data = await client.getContactData();

	if (data) return data;
	else
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
}
