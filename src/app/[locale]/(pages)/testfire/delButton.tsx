"use client"

import React, { useState } from 'react'
import { deleteDocument } from './serv'


const DelButton = ({ id }: { id: string }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        setIsLoading(true)
        await deleteDocument(id)
        setIsLoading(false)
    }


    return (
        <button onClick={handleDelete} className='text-red-600'>{isLoading ? 'loading' : 'delete'}</button>
    )
}

export default DelButton