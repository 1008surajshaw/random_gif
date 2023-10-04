import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';


const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');

  const API_KEY ="dcesaeDQbNauQAJM01WzyJCKh7nVA8lq";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  
  

  async function fetchData() {
    setLoading(true);
    
    const {data} = await fetch.get(url);
    const imageSource = data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
    console.log("not load");
  }
  
  useEffect( () => {
    fetchData('car');
  },[] )





  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

   
      <img src= {gif} alt='gif' width="450" />
      

      <button onClick={() => fetchData()}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Random
