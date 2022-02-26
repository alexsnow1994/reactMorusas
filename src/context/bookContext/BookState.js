import React ,{useReducer} from "react";
import axiosClient from "../../config/axios";
import BookContext from "./BookContext";
import BookReducer from "./BookReducer";

const BookState = (props) => {
  
    const initialState =  {
      currentBook:{
        title: "",
        author: "",
        isbn:""
      }
    };
    const [globalState, dispatch]= useReducer(BookReducer, initialState);

    const getBooks = async()=>{
      const res = await axiosClient.get("/api/books/readall")
      console.log(res);
      dispatch({
        type:"GET_ALL_BOOKS",
        payload: res.data.data
      });
    };
    
    const createBook = async (dataForm) =>{
      const res = await axiosClient.post("/api/books/create", dataForm);
      console.log(res);

      getBooks();
    }

    const delateBook =  async (id)=>{
      const res= await axiosClient.delete("/api/books/:id", id);
    }

    return(
      <BookContext.Provider
        value={{
          books: globalState.books,
          getBooks,
          createBook,
          delateBook

        }}
      ></BookContext.Provider>
    )

}