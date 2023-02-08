import { SANITY_PROJECT_ID } from '$env/static/private';
import { error } from '@sveltejs/kit';
import { sanityDataset } from '../../../constants';
import type { RequestEvent } from './$types';

export async function GET({ url }: RequestEvent) {
	try {
		const pathSplit = url.pathname.split('/');
		const imageSplit = pathSplit[pathSplit.length - 1].split('-');
		const image = `${imageSplit[1]}-${imageSplit[2]}.${imageSplit[3]}`;
		const src = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${sanityDataset}/${image}`;

		const res = await fetch(src, {
			method: 'GET'
		});

		if (res.status !== 200) {
			throw error(404, 'Image not found!');
		}

		return res;
	} catch (e) {
		throw error(404, 'Image not found!');
	}
}
