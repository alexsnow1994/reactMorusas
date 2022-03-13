import React, { useState, useEffect, useContext } from 'react'
import BookContext from '../../../context/bookContext/BookContext'

import BookRender from './BookRender'

export default function Bookform() {
  const ctxBooks = useContext(BookContext)
  const {
    books,
    getBooks,
    createBook,
    // delatebook
  } = ctxBooks
  
  const [data, setData] = useState({
    title: "",
    author: "",
    isbn: ""
  })

  const [error, setError] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    
    event.preventDefault();

    if (!data.title || !data.author || !data.isbn) {
      return setError("Tienes campos vacíos.")
    };

    createBook(data)

    setData({
      title: "",
      author: "",
      isbn: "",
      img:[],
    });

    return setError("");

  }
  return (
    <>
   
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg m-4 sm:bg-none '>
      
        <div className=' grid grid-cols-1 md:grid-cols-2 text-center p-4  text-2xl '>
        
          <div id="bookForm">
          
            <h1 className='text-white md:text-emerald-700'>Que libro te mueve?</h1>
            <form onSubmit={(evt) => { handleSubmit(evt) }} className="w-full max-w-lg p-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide   text-xs font-bold mb-2" htmlFor="grid-first-name">
                    <h1 className='text-white md:text-emarald'>Titulo</h1>
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white md:bg-white" placeholder="El resplandor"
                    name="title"
                    value={data.tittle}
                    onChange={(evt) => { handleChange(evt) }}
                  />

                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Autor
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 md:bg-white" id="grid-last-name" type="text" placeholder="Stephen King"
                    name="author"
                    value={data.author}
                    onChange={(evt) => { handleChange(evt) }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                    ISBN
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 md:bg-white" id="grid-password" placeholder="ISBN:9780450032202"
                    name="isbn"
                    value={data.isbn}
                    onChange={(evt) => { handleChange(evt) }}
                  />

                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                {/* <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
        Imagen
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"   placeholder="Elresplandor.jpg"/>
      
      
    </div> */}
                <button 
                  type="submit" 
                  className='transition ease-in-out delay-150 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg'>
                  ENVIAR
                </button>
              </div>

            </form>
          </div>
          <div>
            {error ? error : null}
            <h1>LISTADO DE LIBROS</h1>
            
            <BookRender/>
          </div>
         
        </div>

        <div className='grid grid-cols-1 text-center text-white md:text-justify   md:text-emerald-700  m-4 md:text-lg lg:font-extrabold lg:text-2xl'>
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
