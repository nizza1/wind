

import React from 'react'
import { getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from '@/lib/firebase/firebaseConfig';
import { Form } from './formfire';
import DelButton from './delButton';
import { v4 as uuidv4 } from 'uuid';



/* export const revalidate = 5; */
export const dynamic = 'force-dynamic';



const getData = async () => {
    try {
        const coll = await getDocs(collection(db, 'newsletter'));
        return coll.docs.map((doc: DocumentData) => ({ id: doc.id, ...doc.data() }));
    } catch (err) {
        console.error('Error fetching emails:', err);
        return [];
    }
}




const Page = async () => {

    const data: DocumentData = await getData()

    return (
        <main className='min-h-screen'>
            <section className='max-w-[var(--max-width)] mx-auto  px-5 py-10'>
                <h1>
                    here is the test page
                </h1>

                {data.map((email: DocumentData) => (
                    <div key={uuidv4()}>
                        {Object.entries(email).map(([key, value]) => (
                            <div key={uuidv4()}>
                                {key === 'id' ? (
                                    <DelButton id={value} />
                                ) : (
                                    <p>
                                        {key}: {value}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                ))}

                <Form />

            </section>

        </main>
    )
}

export default Page