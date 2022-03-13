import React from 'react'

export default function Fliyers() {
  return (
    <>
     <div id="Bullets" className='grid gap grid-cols-1 text-center text-white text-2xl font-bold '>
    <h1 className='md:text-indigo-500 p-4 text-2xl '>TALLERES PRESENCIALES</h1>
    </div>
     <div className='grid gap md:grid-cols-3  sm:grid-cols-1 sm: p-4 sm: m-3'>
       <div className='p-3'>
          <img className="rounded-lg" src="http://drive.google.com/uc?export=view&id=1uCmS4UPLXybeAkm12orp4LOROks-hUyf"/>
       </div>
       <div className='p-3'>
       <img className='rounded-lg m-1 ' src="http://drive.google.com/uc?export=view&id=1Ua-mGieDB-aU4syBdrhxes7-JfvQqNZA"/>
           
         <img className='rounded-lg m-1' src="http://drive.google.com/uc?export=view&id=1bP55lglG59TxyGowbuEg0rp9m398evd5"/>
       </div>
       <div className='p-3'>
         <img className='rounded-lg ' src="http://drive.google.com/uc?export=view&id=1g6PPxniLfn99diCrij_KSr8de64nvhU6"/>
       </div>
       <div className='m-2 '>
         {/* <img className='rounded-lg p-2' src="http://drive.google.com/uc?export=view&id=1oj6OOo4ApUatWzWHCZp91Y2QNLMu3lDH"/>
         <img className='rounded-lg p-2 min-h-min' src="http://drive.google.com/uc?export=view&id=1GvT02pxj9MKQXQBiuToRnowkYqqmewpR"/> */}
       </div>
     </div>
    </>
  )
}
