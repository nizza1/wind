
import { examplePost } from "./postExample"

const Page = () => {
  console.log(examplePost);
  const post = examplePost;


  return (
    <main className='min-h-screen px-5 py-5 max-w-[var(--max-width)] mx-auto'>
      <div>
        <h1 className="border-b-2 pb-2">{post.title}</h1>
      </div>

      <section>
        <h1 className="my-4">
          {post.description}
        </h1 >

        {post.postBody.map((el, i) => <p className="mb-2" key={i}>{el.type} - {el.content} {el?.href}</p>)}
      </section>
    </main>
  )
}

export default Page