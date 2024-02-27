import React from 'react'
import Random from "./components/Random"
import Tag from "./components/Tag"

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background overflow-x-hidden items-center pb-9'>
      <h1 className='bg-white rounded-xl py-4 w-11/12 text-center mt-[40px] ml-[35px] 
       mr-[35px] text-3xl font-bold'>
          RANDOM GIFS
      </h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
