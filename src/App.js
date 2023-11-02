import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Sticker from './Pages/Sticker';
import Poster from './Pages/Poster';
import Shirt from './Pages/Shirt';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shirt" element={<Shirt />} />
          <Route path="/sticker" element={<Sticker />} />
          <Route path="/poster" element={<Poster />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
