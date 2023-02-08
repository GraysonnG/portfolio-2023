import type { Project } from '../../api/client';
import { client } from '../../api/sanityClient';

export async function load() {
	const data = await client.getProjectsData();

	data.projects.sort((a: Project, b: Project) => {
		if (a.priority > b.priority) return 1;
		if (a.priority < b.priority) return -1;
		else return 0;
	});

	if (data) return data;
	else
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
}
