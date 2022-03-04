
import './styles/App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Home from './components/Home';

import Bookform from './components/pages/book/Bookform';
import BookState from './context/bookContext/BookState';
import Layout from './components/Layout';
import Talleres from './components/pages/talleres/Talleres';


function App() {
  return (
    <>
    <BookState>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          
          <Route path="/" element={<Home/>}/>  
          <Route path='/bookform' element={<Bookform/>}/>
          <Route path="/talleres" element={<Talleres/>}/>
        </Route>
      </Routes>
      
     </BrowserRouter>
     </BookState> 
    
    </>
  );
}

export default App;
