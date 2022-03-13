import React from 'react'



export default function Home() {
  return (
    <>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg m-3 md:bg-none'>
    <div className='grid gap grid-cols-1 text-center text-white font-mono text-2xl font-bold '>
    <h1 className='md:text-indigo-500 p-4 '>TALLERES PRESENCIALES</h1>
    </div>
     <div className='grid gap md:grid-cols-3  sm:grid-cols-1 sm: p-4 sm: m-3'>
       <div className='p-3'>
          <img className="" src="http://drive.google.com/uc?export=view&id=1uCmS4UPLXybeAkm12orp4LOROks-hUyf"/>
       </div>
       <div className='m-2'>
       <img className='rounded-lg  p-2' src="http://drive.google.com/uc?export=view&id=1Ua-mGieDB-aU4syBdrhxes7-JfvQqNZA"/>
           
         <img className='rounded-lg  p-2' src="http://drive.google.com/uc?export=view&id=1bP55lglG59TxyGowbuEg0rp9m398evd5"/>
       </div>
       <div className='m-2'>
         <img className='rounded-lg p-2' src="http://drive.google.com/uc?export=view&id=1g6PPxniLfn99diCrij_KSr8de64nvhU6"/>
       </div>
       <div className='m-2 '>
         {/* <img className='rounded-lg p-2' src="http://drive.google.com/uc?export=view&id=1oj6OOo4ApUatWzWHCZp91Y2QNLMu3lDH"/>
         <img className='rounded-lg p-2 min-h-min' src="http://drive.google.com/uc?export=view&id=1GvT02pxj9MKQXQBiuToRnowkYqqmewpR"/> */}
       </div>
     </div>
     
     <div className='gird-cols-1 m-7 text-neutral-200  md:text-emerald-700 font-mono text-center p-5'>
       <h1 className=' m-4 text-2xl '>Quienes somos?</h1>
       <p className=''>Morusas de Ciencia es un proyecto de divulgación y difusión de la ciencia en el que se busca acercar los conocimientos de los laboratorios y espacios académicos a los barrios. Nuestro objetivo es generar experiencias divulgativas en espacios populares donde todos y todas sean libres de participar de manera activa, aprender y expresarse, pues creemos en el derecho a la cultura y el potencial de la Ciencia para transformar la calidad de vida de las personas.<br/> Este proyecto es interdisciplinario, puesto que se realizan actividades relacionadas con distintas percepciones del arte haciendo uso del conocimiento científico.</p>
     </div>
     {/* tarjetas de presentacion */}
        <div id="presentacion"className='grid-cols-1 text-neutral-200 text-center md:text-emerald-700'>
          <div>
            <h1 className='m-3 text-xl'>El equipo</h1>
            <p className='m-2 text-lg p-3'>
            Est ei erat mucius quaeque. Ei his quas phaedrum, efficiantur mediocritatem ne sed, hinc oratio blandit ei sed. Blandit gloriatur eam et. Brute noluisse per et, verear disputando neglegentur at quo. Sea quem legere ei, unum soluta ne duo. Ludus complectitur quo te, ut vide autem homero pro.

His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos, ea pri dico munere propriae. Vel ferri facilis ut, qui paulo ridens praesent ad. Possim alterum qui cu. Accusamus consulatu ius te, cu decore soleat appareat usu.

Dicunt percipit deserunt ut usu. Aliquip delenit an eam, vocent vituperata vim ea. Ei mollis audire interpretaris cum, ei impedit fierent sea. Ius at homero noster prompta, ea sit dignissim vituperata efficiendi. Natum placerat ad mei.

Id sea utamur aperiam, te per choro accusamus consulatu. Brute munere corrumpit ut pri. Ea ipsum appareat erroribus mea. Mei probo inani aliquid ad. Omnis fabulas concludaturque an vix, an noluisse takimata facilisis pro, sit te volumus mandamus. Ad malorum imperdiet duo, ea possim utamur accusamus vix.


            </p>
          </div>
        </div>
     <div className='grid  lg:grid-cols-2 p-4  sm:grid-cols-1 '>
       <div className='object-fill m-4 lg:m-2 sm:m-2 '>

       <div className="max-w-md mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="http://drive.google.com/uc?export=view&id=1TRuXFxhtVdgbFkZXrdxqrqg1iNTugMqx" alt="Dra. Morusas"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-white font-semibold">Dra. Morusa Monserrat Mena</div>
      <h1>Directora General</h1>
     
    </div>
  </div>
</div>
       </div>
       <div className='object-fill m-4 lg:m-2 sm:m-2'>
       <div className="max-w-md mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="http://drive.google.com/uc?export=view&id=1OhSgM-xAN2m4IJrOf38Z8cezIH2UAGJI" alt="Rafael"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-white font-semibold">Rafael Alberto Gutierrez Guerrero</div>
      <h1>Fisico</h1>
      <h2>Director "Morusas de Ciencia / Divulgador"</h2>
      
    </div>
  </div>
</div>
       </div>
       <div className='object-fill m-4 lg:m-2 sm:m-2'>
       <div className='max-w-md mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
       <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="http://drive.google.com/uc?export=view&id=1Jx0t41523plFgWCUR86QfN1DmXtwb9xw" alt="Vanessa Mena"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-white font-semibold">Vanessa Mena</div>
      <h1>Maestra en ciencias QFB</h1>
      <h2>Divulgador</h2>
     
    </div>
  </div>
       </div>
       </div>

       <div className='object-fill m-4 lg:m-2 sm:m-2'>
       <div className='max-w-md mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:m-2 sm:m-2'>
       <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-2/3 w-full object-cover md:h-44 md:w-48" src="http://drive.google.com/uc?export=view&id=145QTVN_7hEuBKkF9_Lpg22iPgEctrPkS" alt="maufred"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-white font-semibold">Emanuel David</div>
      <h1>Ing. Mecanico Electrico</h1>
      <h2>Productor / Divulgador</h2>
   
    </div>
  </div>
       </div>
       </div>
      
       <div className='object-fill m-4 lg:m-2 sm:m-2'>
       <div className='max-w-md mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:m-2 sm:m-2'>
       <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-46 md:w-48" src="http://drive.google.com/uc?export=view&id=1m2y1n59AewpBg4QLDepGHFKmni5kA5rQ" alt="Blanca"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-white  font-semibold">Blanca Castillo</div>
      <h1>Licenciatura en quimica</h1>
      <h2>Divulgador</h2>
   
    </div>
  </div>
       </div>
       </div>

       <div className='object-fill m-4 lg:m-2 sm:m-2'>
       <div className='max-w-md mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:m-2 sm:m-2'>
       <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://ca.slack-edge.com/T75T8EACX-U01SPU12PR7-e1b8f36e7f36-512" alt="Alejandro"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-white text-sm  font-semibold">Alejandro Estrada</div>
      <h1>Ing. Mecanico Electrico</h1>
      <h2>Productor</h2>
   
    </div>
  </div>
       </div>
       </div>
       
     </div>

     </div>

    </>
  )
};



// Morusas de Ciencia es un proyecto de divulgación y difusión de la ciencia en el que se busca acercar los conocimientos de los laboratorios y espacios académicos a los barrios. Nuestro objetivo es generar experiencias divulgativas en espacios populares donde todos y todas sean libres de participar de manera activa, aprender y expresarse, pues creemos en el derecho a la cultura y el potencial de la Ciencia para transformar la calidad de vida de las personas. Este proyecto es interdisciplinario, puesto que se realizan actividades relacionadas con distintas percepciones del arte haciendo uso del conocimiento científico.