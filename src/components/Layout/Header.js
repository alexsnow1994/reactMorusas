import React from 'react'
import {Outlet, Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header>
    <div className=''>
  <nav className="m-4">
    <div className=" max-w-7xl mx-auto content-end px-2 sm:px-6 lg:mx-auto ">
      <div className="items-start text-yellow-500 relative flex text-right justify-between h-16  ">
        {/* <div className="absolute inset-y-0 left-0 flex items-right text-right sm:hidden">
        
          <button type="button" className="inline-flex items-right justify-center text-left p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            </svg>
          </button>
        </div> */}
        <div className="flex-1 flex items-end">
          <div className="flex-shrink-0 flex items-end font-mono content-end">
          {/* <img className="block  h-12 w-auto rounded-full Logo" src="http://drive.google.com/uc?export=view&id=13gXQgZXEZCUfaoN7Z-uY709RXNDc-9mc" alt="Morusas"/> */}
          <img className="block  h-12 w-auto rounded-full Logo" src="http://drive.google.com/uc?export=view&id=107wsbiRk_b242azkeAcwg3yQPGbChaw" alt="Morusas"/>
            <Link to="/" type='button'>
            
            <h1 className='text-red-300'>MORUSAS DE CIENCIAS</h1>
            
            </Link>
          </div>
          <div className="hidden content-end sm:block sm:ml-6 items-right text-right">
            <div className="flex text-center space-x-4">
            <Link to='/bookform' type='button' className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... text-white rounded-lg'>
            <p aria-current="page">Tu Libro</p>
            </Link>
              

              <a  className="text-red-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Equipo</a>

              <Link to="/talleres" type='button' className="text-red-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><p  >Talleres</p>
              </Link>
              <a  className="text-red-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendario</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    
    {/* <div className="sm:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        
        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Tu Libro</a>

        <a href="#" className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Equipo</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Proyectos</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendarios</a>
      </div>
    </div> */}
  </nav>
  </div>
  


    
    
    </header>    

      </>
  )}
