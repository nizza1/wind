"use client"
import React, { useState } from "react"
import { createDoc } from './serv'

const Form = () => {

    const [formName, setFormName] = useState('');
    const [formVal, setFormVal] = useState('');
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        createDoc(formName, formVal);

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {/*  <input onChange={(e) => setFormDate({ [e.target.value]: [...rest] })} type="text" name="doco" id="doco" /> */}
            <input onChange={(e) => setFormName(e.target.value)} type="text" name="name" id="name" />
            <input onChange={(e) => setFormVal(e.target.value)} type="text" name="value" id="value" />

            <button type='submit'>create</button>
        </form>)
}

export { Form }