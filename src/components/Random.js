import useGif from '../hooks/useGif';

const Random = () => {

  //custom Hook
  const {gif, loadingShow, fetchData} = useGif(); 

  return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 py-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold'>A RANDOM GIF</h1>

        <div className='flex flex-col items-center'>
            {
              loadingShow ? (<div className='spinner'></div>) 
              : (<img src={gif} width="450"  loading='lazy'/>)
            }
            
        </div>
        
        
        <button onClick={() => fetchData()}
        className='w-10/12 bg-green-100 text-lg uppercase py-1 
        rounded-lg font-semibold hover:bg-white'>
            Generate
        </button>
    </div>
  )
}

export default Random
