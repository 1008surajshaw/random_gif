import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
//import useGif from '../hooks/useGif';




const Tag = () => {
  const [tag, setTag] = useState('car');
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  
  

  async function fetchData(tag) {
    setLoading(true);
    
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
    console.log("not load");
  }
  
  useEffect( () => {
    fetchData('car');
  },[] )

  


  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}
        value={tag}
      />
      

      <button onClick={() => fetchData(tag)}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Tag
