// @ts-nocheck
export const actions = {
	default: async ({ request }) => {
		console.log(await request.formData());
	}
};
