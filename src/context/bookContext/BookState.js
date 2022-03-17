import { data } from "autoprefixer";
import React ,{useReducer} from "react";
import axiosClient from "../../config/axios";
import BookContext from "./BookContext";
import BookReducer from "./BookReducer";

const BookState = (props) => {
  
    const initialState =  {
      books:[]
    };
    const [globalState, dispatch]= useReducer(BookReducer, initialState);

    const getBooks = async () =>{
      const res = await axiosClient.get("/api/books/readall/")
      console.log("getBooks response:", res.data);

      dispatch({
        type:"GET_ALL_BOOKS",
        payload: res.data
      });
    };
    
    const createBook = async (dataForm) =>{

      const res = await axiosClient.post("/api/books/createbook", dataForm);
      console.log(res);

      getBooks();
      
    }

    const delateBook =  async (_id )=> {

      await axiosClient.delete('/api/books/'+_id );
      getBooks();
    }

    const updateBook= async(_id ,dataForm)=>{
      const res =await axiosClient.put('/api/books/'+_id , dataForm)
      dispatch({
        type:"PUT_ALL_BOOKS",
        payload: res.data
      });
      
      getBooks();
    }
    

    return(
      <BookContext.Provider
        value={{
          books: globalState.books,
          getBooks,
          createBook,
          delateBook,
          updateBook
        }}
        >
          {props.children}
      </BookContext.Provider>
    )

}

export default BookState