import React from 'react'
import styles from './styles.module.css'

interface hoverTextProps {
  text: string
}  

const HoverText: React.FC<hoverTextProps> = ({text}) => {

  return (
    <>
      {text.split("").map((child, idx) => (
        <span className={`${styles.hoverText} text-slate-400`} key={idx}>
          {child}
        </span>
      ))}
    </>
  );
}

export default HoverText

/* 
<h1 className={`${styles.text} ${raleway.className}`}>
</h1>
 */