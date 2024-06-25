"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { registerWithEmail } from '@/lib/firebase/firebaseAuth';
import useAuth from '@/lib/hooks/useAuth';
// Icons
import { FcGoogle } from 'react-icons/fc';


const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const { loading, user } = useAuth();

    useEffect(() => {
        if (!loading && user) {
            router.push('/dashboard');
        }
    }, [user, router, loading])

    const handleRegister = async (e: React.FormEvent<Element>): Promise<void> => {
        e.preventDefault();
        try {
            const user = await registerWithEmail(email, password);
            console.log('Erfolgreich registriert als:', user.email);
            router.push('/dashboard');
        } catch (error) {
            console.error('Registrierung fehlgeschlagen:', error);
        }
    };

    return (
        <form onSubmit={(e) => handleRegister(e)} className='flex flex-col gap-4 px-4 py-9 rounded-2xl bg-[var(--bg-transp)] mt-9 shadow-lg border-[1px]'>
            <h1 className='text-center'>REGISTER</h1>
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

            <Button variant={'outline'} className='border-[1px] border-foreground' type='button'>
                <FcGoogle className='text-2xl mr-2' /> Register with Google
            </Button>

            <Button variant={'default'} type='submit'>
                Register
            </Button>

            <div className='flex justify-between'>
                <p className=''>Already have an account?</p>
                <Link href='/login' className='text-blue-500'>Login</Link>
            </div>
        </form>
    );
};

export default RegisterForm;
