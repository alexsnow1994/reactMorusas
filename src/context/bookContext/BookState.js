import React,{useContextm, useContext, useState} from 'react'
import { Outlet, Link } from 'react-router-dom'
export default function BookState() {
  const[]= useState({
    title:"",
    author:"",
    isbn:""
  })
  return (
    <>
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg m-2 p-4'>
    <div className='grid grid-cols-2 sm:grid-cols-1'>
    <div>
    <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        Titulo
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="El resplandor"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Autor
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Stephen King"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        ISBN
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="ISBN:9780450032202"/>
     
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
        Imagen
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Elresplandor.jpg"/>
      <button type="submit"className='transition ease-in-out delay-150 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg'>
        submit
      </button>
      
    </div>
  </div>
  
</form>
</div>
<div>2</div>

</div>

<div className='grid grid-cols-1 text-center text-white m-4 font-extrabold text-2xl'>
  <div>
    <h1 className='m-4'>IMPORTANCIA DE UN LIBRO.</h1>
    <p className='m-6'>Número de unidades

Texto
HTML

Copiar

Lorem ipsum dolor sit amet consectetur adipiscing elit laoreet, eros lectus pharetra sapien ad vulputate ornare in, fringilla arcu viverra metus pellentesque primis nam. Tortor tempor auctor ultricies est tincidunt donec placerat erat hendrerit cras, lectus vulputate vitae id fringilla in elementum urna tempus volutpat, quisque nisi inceptos praesent feugiat dis aliquet fusce enim. Scelerisque ligula sem rhoncus nibh luctus iaculis dictumst mollis id, ad consequat bibendum felis orci volutpat facilisis vitae nec praesent, habitant et nunc quam varius molestie nascetur semper.

Varius leo fames porttitor inceptos dui tellus eu, nascetur imperdiet cubilia aptent id natoque aliquam cum, justo in elementum cras molestie nulla. Quisque suscipit condimentum felis integer turpis tellus netus dictumst diam duis phasellus egestas tincidunt, aptent magna conubia lacinia odio libero dui magnis torquent accumsan vitae urna. Id donec aenean ac tincidunt habitant enim, cursus tellus proin pretium lectus dictum lobortis, bibendum nisi elementum leo curabitur.</p>
 </div>
 </div>
</div>
    
    </>
  )
}
