import React from 'react'

export default function Reproductor() {
  return (
    <>
        <div className='grid grid-cols-1 m-4 text-center  md:m-6'>
          <h1 className='m-4'>¿Quieres saber mas de nosotros?</h1>
        <iframe 
        className='w-full aspect-video rounded-lg  ' 
        src="https://www.youtube.com/embed/TGpkrld6SeY" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        </div>
    </>
  )
}
