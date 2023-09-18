import React from 'react'
import styles from './HeroSection.module.css';
import HeroImage from '../HeroImage/HeroImage';

const HeroSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.hero}>
      <h1 className={styles.ad}>100 Thousand Songs, ad-free</h1>
      <h1 className={styles.ad}>Over thousands podcast episodes</h1>
      <HeroImage/>
      </div>
    </div>
  )
}

export default HeroSection