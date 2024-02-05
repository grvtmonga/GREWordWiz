import './App.css';
import LSideBar from './components/LSideBar.js';

import Sections from './screens/Sections/Sections.js';

function App() {
  return (
    <div className="app">
      <div className="sidebar"><LSideBar /></div>
      <Sections/>
    </div>
  );
}

export default App;
