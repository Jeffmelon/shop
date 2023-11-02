import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Sticker from './Pages/Sticker';
import Poster from './Pages/Poster';
import Shirt from './Pages/Shirt';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shirt" element={<Shirt />} />
          <Route path="/sticker" element={<Sticker />} />
          <Route path="/poster" element={<Poster />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
