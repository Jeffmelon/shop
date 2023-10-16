import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shirt" element={<Shirt />} />
          <Route path="/sticker" element={<Sticker />} />
          <Route path="/Poster" element={<Poster />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
