import styles from './App.module.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbum, fetchNewAlbum, fetchSongs } from './api/api';
import React,{useEffect, useState } from 'react';
import Section from './components/Section/Section';

function App() {
   const [topAlbumsData, setTopAlbumsData] = useState([]);
   const [newAlbumsData, setNewAlbumsData] = useState([]);
   const [songsData, setSongsData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [toggle, setToggle] = useState(false);
   const [values, setValues] = React.useState(0);


  const handleToggle = () =>{
    setToggle(!toggle);
  }

  const handleChange = (newValue) => {
    console.log(newValue);
    setValues(newValue);
  }

  const generateSongsData = (value) => {
     let key;
     if(value === 0){
      filteredDataValues(songsData);
      return;
     }else if(value === 1){
      key = 'rock'
     }else if(value === 2){
      key = 'pop'
     }else if(value === 3){
      key = 'jazz'
     }else if(value === 4){
      key = 'blues'
     }

     const res = songsData.filter(item => item.genre.key === key);
     filteredDataValues(res);
  }

  useEffect(() => {
    generateSongsData(values)
  }, [values]);

  const generateAllSongs = async () => {
    try{
      const response = await fetchSongs();
      setSongsData(response);
      setFilteredData(response);  
    }catch(err){
      console.log(err);
    }
  }

  const filteredDataValues = (val) => {
    setFilteredData(val)
  }

  const generateData = async () => {
      const data = await fetchTopAlbum();
      setTopAlbumsData(data);
      
      const newAlbumData = await fetchNewAlbum();
      setNewAlbumsData(newAlbumData);
  }

  useEffect(() => {
    generateData();
    generateAllSongs();
  }, [])

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      {/* <div className='cards'>
      {topAlbumsData.map((item) => {
        return (
          <Card key={item.id} data={item} type='album'/>
        )
      })}
      </div> */}
      <div className={styles.sections}>
      <Section data={topAlbumsData} type='album' title='Top Albums' filteredData={topAlbumsData}/>
      <Section data={newAlbumsData} type='album' title='New Albums' filteredData={newAlbumsData}/>
      <Section data={songsData} type='song' title='songs' filteredDataValues={filteredDataValues} filteredData={filteredData} value={values} handleToggle={handleToggle} handleChange={handleChange}/> 
      </div>

  </div>
  );
}

export default App;
