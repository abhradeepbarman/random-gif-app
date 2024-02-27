import { useState, useEffect } from 'react';
import axios from 'axios';


const useGif = (tag) => {
    
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const [gif, setGif] = useState('');
    const [loadingShow, setLoadingShow] = useState(false);
  
    async function fetchData() {
      setLoadingShow(true);
      const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
      const imgSource = data.data.images.downsized_large.url;
      setGif(imgSource);
      setLoadingShow(false);
    }
  
    useEffect( () => {
      fetchData();
    }, [])
    
    return {gif, loadingShow, fetchData}
}

export default useGif
