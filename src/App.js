
// import './../styles/App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout/index';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
