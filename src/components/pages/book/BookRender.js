import React,{useContext} from 'react';
import BookContext from '../../../context/bookContext/BookContext';

export default function BookRender() {
    const ctxBooks = useContext(BookContext)
  const {
    books,
    
  } = ctxBooks
  return (
      
      <>
        <div className='grid-cols-3'>
            <ul>
                {
                books.map((e, index) => {
                    return (
                    <li key={index}>
                        <div>
                        <h3>{e.title}</h3>
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
