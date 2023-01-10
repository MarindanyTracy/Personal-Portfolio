import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import  Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <Skills />
    </div>
  );
}

export default App;
