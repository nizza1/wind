"use client"

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button';
import { signOutUser } from '@/lib/firebase/firebaseAuth';
import { useRouter } from 'next/navigation';


const LogoutButton = () => {

    const router = useRouter();
    const handleLogout = async () => {



        try {
            await signOutUser();
            // Clear the cookies in the server using our API in app/api/logout/route.ts
            const response = await fetch("/api/logout", {
                method: "POST",
            });

            if (response.ok) {
                router.push("/login");
            } else {
                console.error("Failed to logout on the server");
            }
        } catch (err) {
            console.error('Fehler bei der Abmeldung:', err);
        }
    }

    return (
        <Button onClick={handleLogout} variant={'destructive'}>logout</Button>
    )
}

export default LogoutButton

