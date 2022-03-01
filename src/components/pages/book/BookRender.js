import React,{useContext} from 'react';
import BookContext from '../../../context/bookContext/BookContext';

export default function BookRender() {
    const ctxBooks = useContext(BookContext)
  const {
    books,
    
  } = ctxBooks
  return (
      
      <>
        <ul>
            {
              books.map((e, index) => {
                return (
                  <li key={index}>
                    <h3>{e.title}</h3>
                    <p>{e.author}</p>
                    <p>{e.isbn}</p>
                  </li>
                )
              })
            }
        </ul>
      </>
  );
}
