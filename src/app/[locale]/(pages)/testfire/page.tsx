

import React from 'react'
import { getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from '@/lib/firebase/firebaseConfig';

import { Form } from './formfire';
import DelButton from './delButton';


export const revalidate = 60;


const getEmails = async () => {
    try {
        const coll = await getDocs(collection(db, 'newsletter'))
        /*  const emails = coll.docs.map((doc: DocumentData) => doc.data().email); */

        const cc = coll.docs.map((doc: DocumentData) => (
            {
                id: doc.id,
                ...doc.data()
            }
        ))

        return cc;
    } catch (err) {
        console.log('error:', err);
        return [];
    }
}


const Page = async () => {

    const data: DocumentData = await getEmails()

    console.log(data);


    return (
        <main className='min-h-screen'>
            <section className='max-w-[var(--max-width)] mx-auto  px-5 py-10'>
                <h1>
                    here is the test page
                </h1>

                {data.map((email: string, i: number) => (
                    <div key={`d${i}`}>{Object.entries(email).map(([key, value]) => (
                        <div key={key}>

                            {key === 'id' ? <DelButton id={value} /> :
                                <p > {key}: {value}</p>}

                        </div>
                    )
                    )}</div>
                )
                )}

                <Form />

            </section>

        </main>
    )
}

export default Page