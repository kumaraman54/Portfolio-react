
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import SocialLinks from './component/SocialLinks';
import About from './component/About';
import Port from './component/Port';
import Experience from './component/Experience';
import Contact from './component/Contact';

function App() {
  return (
 <div>
   <NavBar/>
   <Home/>
    <About/>
    <Port/>
    <Experience/>
    <Contact/>
   <SocialLinks/>
 </div>
  );
}

export default App;
