// Import CSS
import './App.css';

// Import Components
import Navbar from './Navbar.js';
// Import Dependencies
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
          {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home handleIconclick={handleIconclick}/>} />/>
            </Routes>
          </BrowserRouter> */}
    </div>
  );
}

export default App;
