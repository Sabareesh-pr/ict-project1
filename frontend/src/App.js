import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Add from './Pages/Add';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<Add />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
