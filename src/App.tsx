import './App.css';
import Table from "./components/Table/Table";
import Slider from "./components/Slider/Slider";


function App() {

  return (
    <div className="App">
      <Table style={{width:"50%"}}/>
      <Slider style={{width:"50%"}}/>
    </div>
  );
}

export default App;
