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
import SignIn from './components/SignIn';
import UpdateContact from './components/UpdateContact';

function App() {
  let name = "George Alexendar"
  let info = "Software Developer"
  return (<>

    <Router>
      <Navbar />
      <div className="mm"><p></p></div>
      <div className="container mm">
        <Routes>
        <Route exact path="/" element={<SignIn  />} />
          <Route exact path="/signIn" element={<SignIn  />} />
          <Route exact path="/update" element={<UpdateContact  />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />


        </Routes>
      </div>

    </Router>

  </>
  );
}

export default App;
