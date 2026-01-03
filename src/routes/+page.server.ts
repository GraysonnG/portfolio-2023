import { client } from '../api/sanityClient';

export async function load() {
	const data = await client.getHomeData();
	const contactData = await client.getContactData();

	if (data) return {
		home: data,
		contactItems: contactData.contactItems
	};
	else
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
}
