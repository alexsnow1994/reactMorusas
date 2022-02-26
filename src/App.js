
import './styles/App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home';

import Footer from './components/Footer';
import BookState from './context/bookContext/BookState';
import Bookform from './components/pages/Bookform';

function App() {
  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          
          <Route path='/bookform' element={<Bookform/>}/>
        </Route>
        
      </Routes>
      <Footer/>
     </BrowserRouter>
    
    </>
  );
}

export default App;
