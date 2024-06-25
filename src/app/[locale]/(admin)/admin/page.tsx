import React from 'react'

const Page = () => {
    return (
        <main className='min-h-screen'>
            <div className='max-w-[var(--max-width)] mx-auto px-5 py-10'>
                <h1>
                    here is the admin panel
                </h1>

                <div>

                    <h2 className='text-red-500 py-5'>
                        this route should be protected
                    </h2>
                </div>
            </div>
        </main>
    )
}

export default Page