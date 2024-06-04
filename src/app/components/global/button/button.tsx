import React from 'react'


const Button = ({text}:{text:string}) => {
  return (

    <button className='bg-[var(--foreground)] text-[var(--background)] py-2 px-3 rounded-full hover:bg-transparent border-[1px] duration-200 hover:border-foreground hover:text-foreground '>
    {text}
</button>
  )
}

export default Button