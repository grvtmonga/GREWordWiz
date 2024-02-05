import './App.css';
import LSideBar from './components/LSideBar.js';
import Sections from './screens/Sections/Sections.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Learn from "./screens/Learn/Learn.js"
function App() {
  return (
    <Router>
    <div className="app">
      <div className="sidebar"><LSideBar /></div>
      <Routes>
      <Route path ='/learn' element={<Learn />} />
      <Route path ='/' element={<Sections />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
