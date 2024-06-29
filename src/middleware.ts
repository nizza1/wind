import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import { NextRequest, NextResponse } from 'next/server';

// these are the routes that require authentication
const protectedRoutes = ["/admin", "/dashboard"];

export async function middleware(request: NextRequest) {

    const { pathname, origin } = request.nextUrl;
    const session = request.cookies.get("session");

    // Extract the path and handle default language (no segment)
    const segments = pathname.split('/');
    const langSegment = segments[1];

    // Check if langSegment is a valid locale
    const isLanguageSegment = i18nConfig.locales.includes(langSegment as typeof i18nConfig.locales[number]);

    const route = isLanguageSegment ? `/${segments.slice(2).join('/')}` : pathname;

    // Determine if the request is for a route that requires authentication
    const requiresAuth = protectedRoutes.some(protectedRoute =>
        route.startsWith(protectedRoute)
    );

    // Redirect to login page if trying to access a route that requires authentication without a session
    if (requiresAuth && !session) {
        return NextResponse.redirect(new URL("/login", origin));
    }
    if (requiresAuth && session) {
        try {
            const response = await fetch(`${origin}/api/login`, {
                method: 'GET',
                headers: {
                    'Cookie': `session=${session.value}`,
                },
            });

            if (response.status !== 200) {
                return NextResponse.redirect(new URL("/login", origin));
            }

        } catch (error) {
            console.error('Error during session verification:', error);
            return NextResponse.redirect(new URL("/login", origin));
        }
    }

    return i18nRouter(request, i18nConfig)
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}


/*
        ? Match all request paths except for the ones starting with:
        ?  - api (API routes)
        ? - _next/static (static files)
        ? - _next/image (image optimization files)
        ? - favicon.ico (favicon file)
        */