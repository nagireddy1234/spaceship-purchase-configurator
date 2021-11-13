import "./App.css";
import Color from "./components/Color";
import Power from "./components/Power";
import WarpDrive from "./components/WarpDrive";

const App: React.FC = () => {
  return (
    <>
      <h1> spaceship-purchase-configurator</h1>
     
      <Color color="white" colorName="white" price={0} />
      <Power power={100} price={0} />
      <WarpDrive IsWarpdrive="NO" price={0}/>
      <WarpDrive IsWarpdrive="NO" price={0}/>
    </>
  );
};

export default App;
