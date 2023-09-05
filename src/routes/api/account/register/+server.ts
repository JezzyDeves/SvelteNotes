import { PRIVATE_KEY } from '$env/static/private';
import prismaClient from '$lib/prismaClient';
import { error } from '@sveltejs/kit';
import { randomBytes, scryptSync } from 'crypto';
import { sign } from 'jsonwebtoken';
import type { LoginInfo } from '../LoginInfo';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const registrationInfo = (await request.json()) as LoginInfo;

	const salt = randomBytes(16);
	const hashedPassword = scryptSync(Buffer.from(registrationInfo.password), salt, 32);

	const existingUsername = await prismaClient.user.findFirst({
		where: {
			username: registrationInfo.username
		}
	});

	if (existingUsername) {
		throw error(400, { message: 'This username has already been taken' });
	}

	await prismaClient.user.create({
		data: {
			username: registrationInfo.username,
			password: hashedPassword.toString('hex'),
			salt: salt.toString('hex')
		}
	});

	const webToken = sign(registrationInfo, PRIVATE_KEY);

	cookies.set('auth', webToken, { path: '/' });

	return new Response(null, { status: 200, statusText: 'New user created' });
};
