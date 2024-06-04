/* import React from 'react'
import PostPage from '../../blogComponent/postPage'
import { getSinglePost} from '@sanityCli/lib/client'
import MainImagePost from '../../blogComponent/mainImagePost'


const Page = async({params}:{ params: {slug:string}}) => {
    const slug = params.slug
    const post = await getSinglePost(slug)|| {}
    const {title, _id, author, mainImage, body, _updatedAt, categories} = post?? {}
    
  return (
    <main className='min-h-screen px-5 py-5 max-w-[var(--max-width)] mx-auto'>
        <div>
            <MainImagePost image={mainImage} />
            <h1>{title}</h1>
            <p>{categories}</p>
            <p>{_id}</p>
            <p>{author?.name}</p>
            <p>{_updatedAt}</p>
            <PostPage />
        </div>
    </main>
  )
}

export default Page */

const Page = async({params}:{ params: {slug:string}}) => {
  const slug = params.slug

return (
  <main className='min-h-screen px-5 py-5 max-w-[var(--max-width)] mx-auto'>
    <h1>
      {slug}
    </h1>
  </main>
)
}

export default Page