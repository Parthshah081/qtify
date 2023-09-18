import React from 'react'
import styles from './Card.module.css'
import { Chip } from '@mui/material'
const Card = ({data, type}) => {
  const getCard = (type) => {
    switch(type) {
        case 'album' : {
            const {image, follows, title, song} = data;
            return (
                <div className={styles.cardContainer}>
                   <div className={styles.card}>
                    <img src={image} alt='album'/>
                    <div className={styles.banner}>
                      <Chip className={styles.chip} label={`${follows} Follows`} />
                    </div>
                   </div>
                   <div className={styles.title}>
                    <p>{title}</p>
                   </div>
                </div>
            )
        }
        default : 
        return <></>
    }
  }
  return getCard(type);
}

export default Card