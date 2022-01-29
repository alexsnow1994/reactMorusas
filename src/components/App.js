
import BookForm from './BookForm';
import FooterMorusas from './FooterMorusas';
import MainMorusas from './MainMorusas';
import MorusasHeader from './MorusasHeader';
import './../styles/App.css';

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
