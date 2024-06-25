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
    <div className='w-[200px] h-[200px] rounded-2xl overflow-hidden flex-none bg-[var(--card-dark)] snap-start  shadow-sm'>
      <div className='w-full h-3/4 flex justify-center items-center text-[var(--highlight)]'>
        <Icon className='text-8xl' />
      </div>
      <div className='text-center pt-2 pb-2 px-2 flex justify-center'>
        <h2 className='py-1 bg-[var(--card-light)] rounded-2xl w-fit px-4 '>{title}</h2>
        {/* <p className='text-[var(--secondary-foreground)]'>{description}</p> */}
      </div>
    </div>
  );
};

export default Card