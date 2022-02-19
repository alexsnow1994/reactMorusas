import React,{useContextm, useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
export default function BookState() {
  return (
    <>
    <form id='bookForm'>
        <div className='container mx-auto'>
            <label></label>
            <input />
            <label></label>
            <input/>
            <label></label>
            <input/>
            <label></label>
            <input/>
        </div>
    </form>
    </>
  )
}
