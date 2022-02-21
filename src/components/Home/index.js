import React from 'react'

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-2  g-4'>
        <div >
          <p>Morusas de Ciencia es un proyecto de divulgación y difusión de la ciencia en el que se busca acercar los conocimientos de los laboratorios y espacios académicos a los barrios. Nuestro objetivo es generar experiencias divulgativas en espacios populares donde todos y todas sean libres de participar de manera activa, aprender y expresarse, pues creemos en el derecho a la cultura y el potencial de la Ciencia para transformar la calidad de vida de las personas. Este proyecto es interdisciplinario, puesto que se realizan actividades relacionadas con distintas percepciones del arte haciendo uso del conocimiento científico.</p>
        </div>
        <div>
          <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="http://drive.google.com/uc?export=view&id=1uCmS4UPLXybeAkm12orp4LOROks-hUyf"
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="http://drive.google.com/uc?export=view&id=1oj6OOo4ApUatWzWHCZp91Y2QNLMu3lDH"
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    </>
  )
};
