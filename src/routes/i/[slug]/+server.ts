import { client } from '../../../api/sanityClient';
import type { RequestEvent } from './$types';

export async function GET({ url }: RequestEvent) {
	const split = url.pathname.split('/');
	const _id = split[split.length - 1];
	const src = await client.getImageURL(_id);
	return await fetch(src);
}
