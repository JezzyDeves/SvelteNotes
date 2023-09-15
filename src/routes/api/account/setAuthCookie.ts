import { PRIVATE_KEY } from '$env/static/private';
import jwt from 'jsonwebtoken';
import type { LoginInfo } from './LoginInfo';
import type { Cookies } from '@sveltejs/kit';

export function setAuthCookie(loginInfo: LoginInfo, cookies: Cookies) {
	const webToken = jwt.sign(loginInfo, PRIVATE_KEY);

	cookies.set('auth', webToken, { path: '/' });
}
