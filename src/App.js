import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
