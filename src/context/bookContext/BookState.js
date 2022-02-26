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

    const delateBook =  async (id)=> {

      await axiosClient.delete("/api/books/:id", id);

    }

    return(
      <BookContext.Provider
        value={{
          books: globalState.books,
          getBooks,
          createBook,
          delateBook
        }}
        >
          {props.children}
        </BookContext.Provider>
    )

}

export default BookState