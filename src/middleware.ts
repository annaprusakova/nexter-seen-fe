import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	// A list of all messages that are supported
	locales: ['en', 'uk'],

	// Used when no locale matches
	defaultLocale: 'en'
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(uk|en)/:path*']
};
