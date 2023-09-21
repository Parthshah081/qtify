import React, { useState } from 'react'
import styles from './Section.module.css'
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
const Section = ({title, data}) => {
    const [topAlbumsToggle, setTopAlbumsToggle] = useState(true);
    
    const handleToggle = () => {
        setTopAlbumsToggle(!topAlbumsToggle)
    }
  return (
    <div>
        <div className={styles.header}>
          <h3>{title}</h3>
          <h4 className={styles.toggleCards} onClick={handleToggle}>
            {topAlbumsToggle ? 'Show All' : 'Collapse All'}
          </h4>
        </div>
        {
            !data.length?(
                <CircularProgress/>
            ):(<div className={styles.container}>
                {!topAlbumsToggle ?
                <div className={styles.cardWrapper}>
                    {data.map((item) => <Card key={item.id} data={item} type='album'/>)}
                </div>:(
                  <Carousel data={data} cardRender={(data) => <Card data={data} type='album'/>}/>
                )
                }
                </div>
            )
        }
    </div>
  )
}

export default Section