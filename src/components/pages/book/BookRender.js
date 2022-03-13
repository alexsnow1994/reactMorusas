import React,{useContext} from 'react';
import BookContext from '../../../context/bookContext/BookContext';

export default function BookRender() {
    const ctxBooks = useContext(BookContext)
  const {
    books,
    
  } = ctxBooks
  return (
      
      <>
        <div className='grid-cols-3 text-white md:text-emerald-700'>
            <ul>
                {
                books.map((e, index) => {
                    return (
                    <li key={index}>
                        <div>
                        <h1>{e.title}</h1>
                        </div>
                        <div>
                        <p>{e.author}</p>
                        </div>
                        <div>
                        <p>{e.isbn}</p>
                        </div>
                    </li>
                    )
                })
                }
            </ul>
        </div>
      </>
  );
}
