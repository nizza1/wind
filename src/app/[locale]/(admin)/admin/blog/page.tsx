"use client"

import React, {ReactEventHandler, use, useState} from 'react'

import { db } from '@/lib/firebase/firebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

//ui
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';

//icons 
import { IoIosAddCircleOutline } from "react-icons/io";

import { IoImagesOutline } from "react-icons/io5";



// components 
/* import TextEditor from './textEditor/textEditor'; */
import Tiptap from './tiptapjs/tiptap';


type PostBodyContent = {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'paragraph' | 'link' | 'image';
    content: string;
  };

type PostContent = {
    title: string;
    subTitle: string;
    author: string;
    mainImage: string;
    body: PostBodyContent[];
}


const Page = () => {

    const [postContent, setPostContent] = useState<PostContent>({
        title:'',
        subTitle:'',
        author:'',
        mainImage:'',
        body:[]
    })

    const handleSubmit = async(e : React.FormEvent)=> {
        e.preventDefault();
        console.log('submited');
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=> {
        const {name , value} = e.target;
        setPostContent(
            prev => ({
                ...prev , 
                [name]: value
            })
        )
    }

    const  {
        title,
        subTitle,
        author,
        mainImage,
        body
    } = postContent 

  return (
    <main className=''>

        <section className='min-h-screen px-5 py-5 max-w-[var(--max-width)] mx-auto'>
            <div className='mb-6'>
            <h1>
                Create an article 
             </h1>
            </div>

            <div className=' gap-2 bg-[var(--bg-transp)]  p-3 rounded-md max-w-40'>
           <div  className='h-36 mb-3 rounded-md '>
            <IoImagesOutline className=' w-full h-full '/>
            </div>

            <Button>
             Upload image 
             <IoIosAddCircleOutline/>
            </Button>
          
           </div>

           <form onSubmit={handleSubmit} className='py-6 flex flex-col gap-3'>

           <Input type="text" name='title' onChange={handleChange} placeholder="Title" />
           <Input type="text" name='subTitle' onChange={handleChange} placeholder="subTitle" />
           <Input type="text" name='author' onChange={handleChange} placeholder="Author" />
           <Input type="text" name='mainImage' onChange={handleChange} placeholder="main Image" />

          

          {/*  <TextEditor /> */}
          <div className='border-[1px] relative px-3 pb-3 rounded-lg max-h-[400px] md:max-h-[500px] overflow-y-auto'>
          <Tiptap/>
          </div>
         
           <Button type='submit'>
            Post
           </Button>

           </form>


        </section>
    </main>
  )
}

export default Page