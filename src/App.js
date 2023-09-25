import styles from './App.module.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbum, fetchNewAlbum, fetchSongs } from './api/api';
import React, { useEffect, useState } from 'react';
import Section from './components/Section/Section';

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [values, setValues] = React.useState(0);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  // const handleToggle = (toggle, setToggle) => {
  //   setToggle(!toggle);
  // }

  const handleChange = (newValue) => {
    // console.log(newValue);
    setValues(newValue);
  }

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredDataValues(songsData);
      return;
    } else if (value === 1) {
      key = 'rock'
    } else if (value === 2) {
      key = 'pop'
    } else if (value === 3) {
      key = 'jazz'
    } else if (value === 4) {
      key = 'blues'
    }

    const res = songsData.filter(item => item.genre.key === key);
    filteredDataValues(res);
  }

  useEffect(() => {
    generateSongsData(values)
    //eslint disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const generateAllSongs = async () => {
    try {
      const response = await fetchSongs();
      setSongsData(response);
      setFilteredData(response);
    } catch (err) {
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

  const handleSearch = (query) => {
    console.log('Query', query)
    const filteredSongs = songsData.filter((item) =>
    item.title &&
    typeof item.title === 'string' &&
    item.title.toLowerCase().includes(query.toLowerCase())
  );

    const filteredTopAlbums = topAlbumsData.filter((item) => 
      item.title && item.title === 'string' && item.tilte.toLowerCase().includes(query.toLowerCase())
    )

    const filteredNewAlbums = newAlbumsData.filter((item) =>
    item.title &&
    typeof item.title === 'string' &&
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const combinedResults = [...filteredSongs, ...filteredTopAlbums, ...filteredNewAlbums];

  setFilteredData(combinedResults);
  
  }

  return (
    <div>
      <Navbar data={filteredData} onSearch={handleSearch}/>
      <HeroSection />
      {/* <div className='cards'>
      {topAlbumsData.map((item) => {
        return (
          <Card key={item.id} data={item} type='album'/>
        )
      })}
      </div> */}
      <div className={styles.sections}>
        <Section data={topAlbumsData} type='album' title='Top Albums' toggle={toggle} filteredData={topAlbumsData} setToggle={setToggle} />
        <Section data={newAlbumsData} type='album' title='New Albums' toggle={toggle1} setToggle={setToggle1} filteredData={newAlbumsData} />
        <Section data={songsData} type='song' title='songs' toggle={toggle2} filteredDataValues={filteredDataValues} filteredData={filteredData} value={values} setToggle={setToggle2} handleChange={handleChange} />
      </div>

    </div>
  );
}

export default App;
