import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebase/admin/firbaseAdmin";



export async function POST(request: NextRequest) {
    const session = cookies().get("session")?.value || "";

    // Validate if the cookie exists in the request
    if (!session) {
        return NextResponse.json({ message: 'No session found' }, { status: 400 });
    }

    // Use Firebase Admin to validate the session cookie
    try {
        const decodedClaims = await auth().verifySessionCookie(session, true);
        if (decodedClaims) {
            // Revoke the session cookie
            await auth().revokeRefreshTokens(decodedClaims.sub);

            // Clear the session cookie
            cookies().set({
                name: "session",
                value: "",
                maxAge: 0,
                httpOnly: true,
                /* secure: true, */
            });

            console.log('logggggggged out ');

            return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
        }
    } catch (error) {
        console.error('Error during logout:', error);
    }

    return NextResponse.json({ message: 'Invalid session cookie' }, { status: 401 });
}
