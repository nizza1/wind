"use server"

import { revalidatePath } from "next/cache"
import { doc, setDoc, addDoc, collection, deleteDoc } from "firebase/firestore";
import { db } from '@/lib/firebase/firebaseConfig';


const revalidater = () => {
    revalidatePath('[locale]/(pages)/testfire')
}

const createDoc = async (nam: string, val: string) => {
    //* to create doc with auto-generated id 
    const ob = { [nam]: val }
    const docRef = collection(db, 'newsletter')
    await addDoc(docRef, ob)
    revalidater()
}

const deleteDocument = async (id: string) => {
    if (!id) {
        console.log('there is no document id passed');
    } else {
        const docRef = doc(db, 'newsletter', id)
        await deleteDoc(docRef)
        revalidater()
    }

}

export { createDoc, deleteDocument }