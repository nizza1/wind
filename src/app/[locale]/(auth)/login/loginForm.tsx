"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmail, signInWithGoogle } from '@/lib/firebase/firebaseAuth';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleAction = async (e: React.FormEvent<Element>): Promise<void> => {
        e.preventDefault();
        try {
            const user = await signInWithEmail(email, password);
            const token = await user.getIdToken();

            const authorize = await fetch("/api/login", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            if (authorize.status === 200) {
                router.push('/dashboard')
            }

        } catch (error) {
            console.error('Anmeldung fehlgeschlagen:', error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();

            const token = await user.getIdToken();
            /* localStorage.setItem('authToken', token); */
            const expiresInSeconds = 60 * 60 * 24 * 7; // 7 Tage
            const expiresDate = new Date(Date.now() + expiresInSeconds * 1000);
            /*     document.cookie = `accessToken=${token}; expires=${expiresDate.toUTCString()}; path=/; Secure; SameSite=None`; */
            console.log('Angemeldeter Benutzer:', user);
            // Weiterleitung oder andere Aktionen nach erfolgreicher Anmeldung
        } catch (error) {
            console.error('Fehler bei der Google-Anmeldung:', error);
        }
    };

    return (
        <form onSubmit={(e) => handleAction(e)} className='flex flex-col gap-4 px-4 py-9 rounded-2xl bg-[var(--bg-transp)] mt-9 shadow-lg border-[1px]'>
            <h1 className='text-center'>LOGIN</h1>
            <Input
                className='px-3 py-2'
                type="email"
                placeholder='Email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                className='px-2 py-2'
                type="password"
                placeholder='Password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />



            <Button variant={'default'} type='submit'>
                log in
            </Button>

            <Button variant={'outline'} className='border-[1px] border-foreground' type='button' onClick={handleGoogleSignIn}>
                <FcGoogle className='text-2xl mr-2' /> log in with Google
            </Button>

            <div className='flex justify-between'>
                <p className=''>Don't have an account?</p>
                <Link href='/register' className='text-blue-500'>register</Link>
            </div>
        </form>
    );
};

export default Login;