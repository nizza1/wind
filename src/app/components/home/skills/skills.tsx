"use client"

import React, { useRef, useState, useEffect } from 'react'
import Card from './card/card'
import Slider from '../../shared/slider/slider';
import { cardsData } from './cardsData';


type Props = {
  title: string,
}
const Skills = ({ title }: Props) => {
  return (
    <Slider title={title} >
      {cardsData.map(
        card => <Card
          key={card.id}
          title={card.title}
          description={card.description}
          Icon={card.Icon} />
      )}
    </Slider>
  )
}
export default Skills;


