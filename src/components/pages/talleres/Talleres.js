import React from 'react'
import Reproductor from './Reproductor'

export default function Talleres() {
  return (
    <>
    <div className=' 
    bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg m-4 
    grid grid-rows-10 
    grid-flow-cols 
    mg-9
    sm:bg-none
    md:colums-sm
    md:grid-rows-3 
    md:grid-flow-col 
    
    text-center'>
        <div className='border-8 border-inherit hover:border-indigo-300'><img className='w-full aspect-square' src="http://drive.google.com/uc?export=view&id=1F58Z0fNg2PqWNjyzKoBF0EaqBorfr8n_"/></div>
        <div className='border-4'><img className='w-full aspect-square' src="http://drive.google.com/uc?export=view&id=14I-_vNy1q5y7I8Jk65E5LI9zzV2BV0dJ"/></div>
        <div className='border-4'><img className='w-full aspect-square' src="http://drive.google.com/uc?export=view&id=1V8yP6TO_1JnjgMzZgr7G456SDw4tbwMe"/></div>
        <div className='border-4'><img className='w-full aspect-square' src="http://drive.google.com/uc?export=view&id=1LaFzsLy-l6IyQHndM1DUPhGj5FhkKCZc"/></div>
        <div className='border-4'><img className='w-full aspect-square' src="http://drive.google.com/uc?export=view&id=1kx12n1roeVWv6McBoRcScC6YAOZiVJwB"/></div>
        <div className='border-4'><img className='w-full aspect-square' src="http://drive.google.com/uc?export=view&id=1VxaN5mreOWt1S5BjN88uexaZgR4Yvsn1"/></div>
        <div className='border-4'><img className='w-full aspect-square' src="http://drive.google.com/uc?export=view&id=1BcTEIJOkaKeiFopmZFSlE1tR8inUELiH"/></div>
        <div className='border-4'><img className='w-full aspect-square' src="http://drive.google.com/uc?export=view&id=1K6Be2iZ7YNJFBVDp2CWcTfiIu0qdWH78"/></div>
        
    </div>
    
      
      <Reproductor/>
    
    </>
  )
}
