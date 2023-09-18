import React from 'react'
import styles from './HeroSection.module.css';
import heroimage from '../../assets/heroimage.png';

const HeroSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.hero}>
         <div>
         <h1 className={styles.ad}>100 Thousand Songs, ad-free</h1>
         <h1 className={styles.ad}>Over thousands podcast episodes</h1>
        </div> 
        <img src={heroimage} alt='headphone' width={212} height={212}/>
      </div>
    </div>
  )
}

export default HeroSection;