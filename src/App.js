
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
      </main>
    </div>
  );
}

export default App;
