import { useReducer } from "react";
import MainContext from "./MainContext";
import Mainreducer from "./MainReducer";
import React from 'react'


export default function MainState() {
  return (
    <>
       
<div className="bg-white shadow overflow-hidden sm:rounded-md">
  <ul role="list" className="divide-y divide-gray-200">
    <li className="px-4 py-4 sm:px-6">
      primer contenido
    </li>
    <li className="px-4 py-4 sm:px-6">
      segundo contenido
    </li>
    <li className="px-4 py-4 sm:px-6">
      tercer contenido
    </li>

   
  </ul>
</div>

    </>
  )
}
