
import './App.css';
import Header from './components/Header/Header.jsx';
import Caracteristicas from './components/SectionFeatures/SectionFeatures.jsx';
import Historia from './components/SectionHistory/SectionHistory.jsx';
import Usos from './components/SectionUsage/SectionUsage.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Caracteristicas />
      <Historia />
      <Usos />
      <Footer />
    </div>
  );
}

export default App;
