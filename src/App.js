import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Hero from './Components/Elements/Hero';
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';
import Halloween from './Components/Elements/Halloween';
import Tokenomics from './Components/Elements/Tokenomics';
import Documents from './Components/Elements/Documents';
import Faqs from './Components/Utils/Faqs';
import Roadmap from './Components/Elements/Roadmap';









function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      
      <Halloween/>
      <Tokenomics/>
      <Roadmap/>
      <Documents/>
      <Faqs/>
      <Footer/>
      
    </div>
  );
}

export default App;
