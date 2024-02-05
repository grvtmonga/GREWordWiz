import './App.css';
import SideBar from './components/SideBar.js';

import Sections from './screens/Sections/Sections.js';

function App() {
  return (
    <div className="app">
      <div className="sidebar"><SideBar /></div>
      <Sections/>
    </div>
  );
}

export default App;
