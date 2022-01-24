import React from 'react';

export default function MorusasHeader() {
  return <>
    <div className='container-fluid navbar-bar '>
        <div className='row'>
            <div className="col-3 col-12-md">
            <h1>Morusas de Ciencia <img href="" src='*'></img></h1>
            </div>
            <div className='col-3 col-12-md'>
                <p>Quienes somos?</p>
                </div>
                <div className='col-3 col-12-md'>
                    <p><a>Redes sociales</a></p>
                </div>
                <div id="bookForm" className='col-3 col-12-md'>
                  <a href=""><p className='danger'>Cual es tu libro Favorito?</p></a>
                </div>  
        </div>
        
    </div>
  </>;
}
