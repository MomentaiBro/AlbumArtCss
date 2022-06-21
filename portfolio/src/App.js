
import './App.css';
import { Display } from './components/Display/Display';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Outlet /> */}
      <Display />
    </div>
  );
}

export default App;
