
import './styles/App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home';
import MainState from './context/mainContext/MainState';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          <Route path='/Main' element={<MainState/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
