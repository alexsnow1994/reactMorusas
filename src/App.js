
import BookForm from './components/BookForm';
import FooterMorusas from './components/FooterMorusas';
import MainMorusas from './components/MainMorusas';
import MorusasHeader from './components/MorusasHeader';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header id='morusasHeader'>
        <MorusasHeader/>        
      </header>
      <main>
        <MainMorusas/>
        <section>
          
        </section>   
      </main>
      <footer id="footerMorusas">
           <FooterMorusas />
      </footer> 
    </div>
  );
}

export default App;
