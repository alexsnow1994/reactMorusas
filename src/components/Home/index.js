import React from 'react'
import Bullets from '../components/Bullets'
import Fliyers from '../components/Fliyers'
import Tarjetero from '../components/Tarjetero'



export default function Home() {
  return (
    <>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg m-3 md:bg-none'>
        <Fliyers/>
     
          <Bullets/>
            <Tarjetero/>
     </div>

    </>
  )
};



