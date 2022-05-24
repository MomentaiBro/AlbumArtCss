
import './App.css';
import  { RPCV3 }  from './artwork/Artists/Macroblank/RarePsalmsCollectionVol3/RarePsalmsCollectionVol3';
import { Display } from './components/Display/Display';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to my portfolio of Ablum Covers made with CSS</h1>
      <Display />
      {/* <RPCV3 /> */}
    </div>
  );
}

export default App;
