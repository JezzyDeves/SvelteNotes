import prismaClient from '$lib/prismaClient';
import { scryptSync } from 'crypto';
import type { LoginInfo } from '../LoginInfo';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { setAuthCookie } from '../setAuthCookie';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const loginInfo: LoginInfo = await request.json();

	const user = await prismaClient.user.findFirst({ where: { username: loginInfo.username } });

	if (!user) {
		throw error(404, { message: 'No user found' });
	}

	const passwordHash = scryptSync(
		Buffer.from(loginInfo.password),
		Buffer.from(user.salt, 'hex'),
		32
	);

	if (passwordHash.toString('hex') !== user.password) {
		throw error(401, { message: 'Incorrect password' });
	}

	setAuthCookie(loginInfo, cookies);

	return new Response();
};
