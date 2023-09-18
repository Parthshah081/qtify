import './App.css';
import Card from './components/Card/Card';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbum } from './api/api';
import { useEffect, useState } from 'react';

function App() {
   const [topAlbumsData, setTopAlbumsData] = useState([]);
  const generateData = async () => {
      const data = await fetchTopAlbum();
      setTopAlbumsData(data);
  }

  useEffect(() => {
    generateData();
  }, [])

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <div className='cards'>
      {topAlbumsData.map((item) => {
        return (
          <Card key={item.id} data={item} type='album'/>
        )
      })}
      </div>
  </div>
  );
}

export default App;
