import './App.css';
import Home from './components/Home'
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import FootBar from './FootBar';

function App() {
  let name="George Alexendar"
  let info="Software Developer"
  return (<>
  
    <Router>
      <Navbar />
      <div className="mm"><p></p></div>
      <div className="container mm">
        <Routes>
         
          <Route exact path="/home" element={<Home name={name} info={info} />} />
          <Route exact path="/about" element={<About  />} />
        
          
        </Routes>
      </div>

    </Router>
<FootBar className="my-10"></FootBar>
  </>
  );
}

export default App;
