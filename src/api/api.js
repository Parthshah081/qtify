import axios from 'axios';

const backendEndpoint = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbum = async () => {
    try{
       const response = await axios.get(`${backendEndpoint}/albums/top`);
       return response.data;
    }catch(err){
        console.log(err)
    }
};

export const fetchNewAlbum = async () => {
    try{
      const response = await axios.get(`${backendEndpoint}/albums/new`);
      return response.data;
    }catch(err){
      console.log(err)
    }
}

export const fetchSongs = async () => {
    try{
      const response = await axios.get(`${backendEndpoint}/songs`);
      console.log(response.data)
      return response.data;
    }catch(err){
        console.log(err)
    }
}



