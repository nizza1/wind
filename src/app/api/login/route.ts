import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyIdToken, auth } from '@/lib/firebase/admin/firbaseAdmin';

export async function POST(request: NextRequest, response: NextResponse) {
    const authorization = headers().get("Authorization");
    if (authorization?.startsWith("Bearer ")) {

        const cookie = authorization.split("Bearer ")[1];
        const decodedToken = await verifyIdToken(cookie);

        if (decodedToken) {
            const expiresIn = 60 * 60 * 24 * 5 * 1000;
            const sessionCookie = await auth().createSessionCookie(cookie, {
                expiresIn,
            });
            const options = {
                name: "session",
                value: sessionCookie,
                maxAge: expiresIn,
                httpOnly: true,
                /*  secure: true, */
            };


            cookies().set(options);
        }
    }

    return NextResponse.json({}, { status: 200 });
}

export async function GET(request: NextRequest) {
    const session = cookies().get("session")?.value || "";

    // Validate if the cookie exists in the request
    if (!session) {
        /*  console.log('no session from api login') */
        return NextResponse.json({ isLogged: false }, { status: 401 });
    }
    // Use Firebase Admin to validate the session cookie
    try {

        const decodedClaims = await auth().verifySessionCookie(session, true);
        if (decodedClaims) {
            return NextResponse.json({ isLogged: true }, { status: 200 });
        }

    } catch (error) {
        console.error('Invalid session cookie:', error);
    }

    return NextResponse.json({ isLogged: false }, { status: 401 });
}