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
