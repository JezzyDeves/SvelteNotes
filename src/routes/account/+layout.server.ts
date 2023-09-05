import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const authCookie = cookies.get('auth');

	if (!authCookie) {
		throw error(401, { message: 'Unauthorized' });
	}

	return {};
}) satisfies LayoutServerLoad;
