import React, {useState , useEffect, useContext} from 'react'

export default function Home() {
  return (
    <>
     <div className='grid md:grid-cols-4  sm:grid-cols-1'>
       <div>
          <img className="" src="http://drive.google.com/uc?export=view&id=1uCmS4UPLXybeAkm12orp4LOROks-hUyf"/>
       </div>
       <div>2</div>
     </div>
     
     
     <div className='grid auto-cols-max gap-6 grid-cols-2 sm:grid-cols-1'>
       <div className=''>
       <div class="max-w-md mx-auto bg-fuchsia-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/272757777_7268212576552070_7772484662298105391_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFfOp7t4knpSNwwlgD2VHWzZi4pxdQUrylmLinF1BSvKXweQIhpbPsI-O2iFzuhZoG58zaZhrkJojDM7oirp90U&_nc_ohc=vnn3r5LeTAMAX-XWwN9&_nc_ht=scontent.fgdl9-1.fna&oh=00_AT9318xB9mkT4zsv6-f2JAyMNAj_Xp-0nXJUDaq0ZLiaOA&oe=621BCAF1" alt="alexsnow"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-cyan-600 font-semibold">Alejandro Estrada</div>
      <h1>Ing. Mecanico Electrico</h1>
      <h2>Web Developper</h2>
      <p class="mt-2 text-slate-500">Videojuegos, curioso perpetuo , explicar las cosas es pasion</p>
    </div>
  </div>
</div>
       </div>
       <div className='object-fill'>
       <div class="max-w-md mx-auto bg-fuchsia-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent-qro1-2.xx.fbcdn.net/v/t31.18172-8/1091036_521004354631391_519690253_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGAnBDZRHJvSXxHg1zfA7sDbM0tsLzki3FszS2wvOSLcSf4A8PqaPMINYjZb1_c2o0LqGuqioVXb5vePsttuqRC&_nc_ohc=GZSjSG-XCSUAX_aINx3&_nc_ht=scontent-qro1-2.xx&oh=00_AT_ALjASM8WM4FblMIbm3pBdxBoXhdcncJEwSLBRFDbn_A&oe=623E0659" alt="maufred"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-cyan-600 font-semibold">Emanuel David</div>
      <h1>Ing. Mecanico Electrico</h1>
      <h2>Testing y Devops</h2>
      <p class="mt-2 text-slate-500">Videojuegos, curioso perpetuo , explicar las cosas es pasion</p>
    </div>
  </div>
</div>
       </div>
       <div className='max-w-md mx-auto bg-fuchsia-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
       <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent-qro1-2.xx.fbcdn.net/v/t31.18172-8/1091036_521004354631391_519690253_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGAnBDZRHJvSXxHg1zfA7sDbM0tsLzki3FszS2wvOSLcSf4A8PqaPMINYjZb1_c2o0LqGuqioVXb5vePsttuqRC&_nc_ohc=GZSjSG-XCSUAX_aINx3&_nc_ht=scontent-qro1-2.xx&oh=00_AT_ALjASM8WM4FblMIbm3pBdxBoXhdcncJEwSLBRFDbn_A&oe=623E0659" alt="maufred"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-cyan-600 font-semibold">Emanuel David</div>
      <h1>Ing. Mecanico Electrico</h1>
      <h2>Testing y Devops</h2>
      <p class="mt-2 text-slate-500">Videojuegos, curioso perpetuo , explicar las cosas es pasion</p>
    </div>
  </div>
       </div>
       <div className='max-w-md mx-auto bg-fuchsia-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
       <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent-qro1-2.xx.fbcdn.net/v/t31.18172-8/1091036_521004354631391_519690253_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGAnBDZRHJvSXxHg1zfA7sDbM0tsLzki3FszS2wvOSLcSf4A8PqaPMINYjZb1_c2o0LqGuqioVXb5vePsttuqRC&_nc_ohc=GZSjSG-XCSUAX_aINx3&_nc_ht=scontent-qro1-2.xx&oh=00_AT_ALjASM8WM4FblMIbm3pBdxBoXhdcncJEwSLBRFDbn_A&oe=623E0659" alt="maufred"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-cyan-600 font-semibold">Emanuel David</div>
      <h1>Ing. Mecanico Electrico</h1>
      <h2>Testing y Devops</h2>
      <p class="mt-2 text-slate-500">Videojuegos, curioso perpetuo , explicar las cosas es pasion</p>
    </div>
  </div>
       </div>
     </div>

    </>
  )
};



// Morusas de Ciencia es un proyecto de divulgación y difusión de la ciencia en el que se busca acercar los conocimientos de los laboratorios y espacios académicos a los barrios. Nuestro objetivo es generar experiencias divulgativas en espacios populares donde todos y todas sean libres de participar de manera activa, aprender y expresarse, pues creemos en el derecho a la cultura y el potencial de la Ciencia para transformar la calidad de vida de las personas. Este proyecto es interdisciplinario, puesto que se realizan actividades relacionadas con distintas percepciones del arte haciendo uso del conocimiento científico.