import { useState } from "react";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Routings from "./Components/Layout/Routings";

function App() {

  const [selected, setSelected] = useState('_DEFAULT')

  return (
    <div className="App">
        <Header id_Selecter={(id)=> setSelected(id)}/>
        <Routings Catch={selected}/>
        <Footer Catch={selected}/>
    </div>
  );
}

export default App;
