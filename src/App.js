import Header from "./layouts/Header";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Footer from "./layouts/Footer";
import Servicepage from "./pages/Servicespage";
import Portfoliopage from "./pages/Portfoliopage";
import AboutPage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/services' element={<Servicepage />} />
          <Route path='/portfolio' element={<Portfoliopage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<Contactpage />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
