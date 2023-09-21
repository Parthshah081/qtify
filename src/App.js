import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbum, fetchNewAlbum } from './api/api';
import { useEffect, useState } from 'react';
import Section from './components/Section/Section';

function App() {
   const [topAlbumsData, setTopAlbumsData] = useState([]);
   const [newAlbumsData, setNewAlbumsData] = useState([]);
  const generateData = async () => {
      const data = await fetchTopAlbum();
      setTopAlbumsData(data);
      
      const newAlbumData = await fetchNewAlbum();
      setNewAlbumsData(newAlbumData);
  }

  useEffect(() => {
    generateData();
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
      <div className='sections'>
      <Section data={topAlbumsData} title='Top Albums'/>
      <Section data={newAlbumsData} title='New Albums'/>
      </div>

  </div>
  );
}

export default App;
