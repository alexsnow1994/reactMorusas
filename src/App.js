
import './styles/App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home';
import Footer from './components/Footer';
import Bookform from './components/pages/Bookform';
import BookState from './context/bookContext/BookState';


function App() {
  return (
    <>
    <BookState>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          
          <Route path='/bookform' element={<Bookform/>}/>
        </Route>
        
      </Routes>
      <Footer/>
     </BrowserRouter>
     </BookState> 
    
    </>
  );
}

export default App;
