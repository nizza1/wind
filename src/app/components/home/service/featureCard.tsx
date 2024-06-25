
import React from 'react';
import Image, { StaticImageData } from 'next/image';


type Props = {
    title: string,
    description: string,
    img: StaticImageData
}

const FeatureCard = (props: Props) => {

    const { title, description, img } = props;

    return (
        <div className='bg-[var(--card-dark)] p-5 rounded-xl max-w-80 md:max-w-96 relative overflow-hidden flex-none snap-start'>
            <div className='z-20 relative flex flex-col  h-full '>
                <h1 className='mb-4 font-normal'>{title}</h1>
                <p className='mb-auto'>{description}</p>
                <div className=' flex justify-center '>
                    <Image

                        src={img}
                        alt='icons'
                        width={170}
                        height={170}
                    />
                </div>
            </div>
        </div>
    )
}

export default FeatureCard