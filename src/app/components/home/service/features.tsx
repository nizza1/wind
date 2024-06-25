import React from 'react';
import { v4 as uuid } from 'uuid';



import img1 from '/public/3dicons/pixel.png';
import img2 from '/public/3dicons/cuttingEdge.png';
import img3 from '/public/3dicons/tailoredSolustion.png';
import img4 from '/public/3dicons/ongoing-support.png';
import img5 from '/public/3dicons/seo.png';

import FeatureCard from './featureCard';
import { ServiceType } from '@/app/content/home/types';

const images = [img1, img2, img3, img4, img5];

import Slider from '../../shared/slider/slider';


const Features = (props: ServiceType) => {
    const { title, cardsData } = props;

    return (
        <section className='py-5'>

            <Slider title={title} >
                {cardsData.map((f, i) => (
                    <FeatureCard
                        key={uuid()}
                        title={f.title}
                        description={f.description}
                        img={images[i]}
                    />
                ))}
            </Slider>

        </section>
    )
}

export default Features




