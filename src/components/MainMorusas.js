import React from 'react';
import BookForm from './BookForm';
import QuinesS from './QuinesS';


export default function MainMorusas() {
  return(
    <>
        <main>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'>
                        <QuinesS/>
                    </div>
                    <div className='col-4'>

                    </div>
                    <div className='col-4'>
                    <BookForm/>
                    </div>
                </div>
            </div>
        </main>
    </>
  );
}
