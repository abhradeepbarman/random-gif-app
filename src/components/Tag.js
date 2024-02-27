import React, { useState } from 'react'
import useGif from '../hooks/useGif';

const Tag = () => {

  const [tag, setTag] = useState('cat');
  
  //custom Hook
  const {gif, loadingShow, fetchData} = useGif(tag);

  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 py-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold'>RANDOM {tag} GIF</h1>

        <div className='flex flex-col items-center'>
            {
              loadingShow ? (<div className='spinner'></div>) 
              : (<img src={gif} width="450"  loading='lazy'/>)
            }
            
        </div>
        
        <input type="text" className='w-10/12 text-lg py-2 rounded-md text-center'
        onChange={(e) => setTag(e.target.value)} value={tag} />
        
        <button onClick={() => fetchData()}
        className='w-10/12 bg-green-100 text-lg uppercase py-1 
        rounded-lg font-semibold hover:bg-white'>
            Generate
        </button>
    </div>
  )
}

export default Tag
