import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import { NextRequest, NextResponse } from 'next/server';


export function middleware(request: NextRequest) {
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