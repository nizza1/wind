import React from 'react'
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";


import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  description: string;
  Icon: IconType;
}

const Card: React.FC<CardProps> = ({ title, description, Icon }) => {
  return (
    <div className='w-[200px] h-[200px] rounded-2xl overflow-hidden flex-none border-[1px] border-[var(--border)] bg-[var(--card-bg-light)] snap-start shadow-lg'>
      <div className='w-full h-3/4 flex justify-center items-center text-[var(--highlight)] bg-slate-500 bg-opacity-5'>
        <Icon className='text-8xl'/>
      </div>
      <div className='text-center border-slate-800 pt-2 pb-1 px-2'>
        <h2 className='py-1'>{title}</h2>
        {/* <p className='text-[var(--secondary-foreground)]'>{description}</p> */}
      </div>
    </div>
  );
};

export default Card