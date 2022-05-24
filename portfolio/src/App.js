
import './App.css';
import  { RPCV3 }  from './artwork/Artists/Macroblank/RarePsalmsCollectionVol3/RarePsalmsCollectionVol3';
import { Display } from './components/Display/Display';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Display />
      {/* <RPCV3 /> */}
    </div>
  );
}

export default App;
