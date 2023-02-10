import { FONT_AWESOME_KIT_ID } from '$env/static/private';
import type { RequestEvent } from '../$types';

const FA_SOURCE = `https://kit.fontawesome.com/${FONT_AWESOME_KIT_ID}.js`;

export async function GET({ url }: RequestEvent) {
	const res = await fetch(FA_SOURCE);
	return new Response(res.body);
}
