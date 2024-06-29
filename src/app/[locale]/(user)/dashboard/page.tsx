"use client"

import useAuth from '@/lib/hooks/useAuthR';
import LogoutButton from '@/app/components/shared/logoutButton/logoutButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/globalState/store';
import Image from 'next/image';


const Page = () => {


    useAuth();
    const user = useSelector((state: RootState) => state.userProfile.user);


    return (
        <section className=' py-12 min-h-screen'>
            <article className='flex max-w-[var(--max-width)] mx-auto  w-full py-12 px-5'>
                <div className=' min-w-[350px] max-w-[100%] '>

                    <div >

                        {user ? <div>
                            <div className='flex gap-4 items-center'>

                                {user?.photoURL &&
                                    <Image
                                        className='rounded-full'
                                        alt='imageProfile'
                                        width={70}
                                        height={70}
                                        src={user.photoURL} />}

                                <div>
                                    <h1>Welcome, {user.displayName}</h1>
                                    <p>{user.email}</p>
                                </div>



                            </div>
                            <LogoutButton />


                            {/* Weitere Benutzerinformationen hier */}
                        </div> : <h1>Loading</h1>}
                    </div>

                </div>
            </article>
        </section>
    )
}

export default Page