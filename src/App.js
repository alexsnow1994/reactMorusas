
import './styles/App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home';
import MainState from './context/mainContext/MainState';
import Footer from './components/Footer';
import BookState from './context/bookContext/BookState';

function App() {
  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          <Route path='/Main' element={<MainState/>}/>
          <Route path='/bookform' element={<BookState/>}/>
        </Route>
        
      </Routes>
      <Footer/>
     </BrowserRouter>
    
    </>
  );
}

export default App;
