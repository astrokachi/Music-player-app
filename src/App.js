import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Player from "./components/Player";
import { StateContext } from "./context/share";
import Home from "./Home";



function App() {
  const {toggle} = useContext(StateContext)

  return (    
    <div className="bg-primary">
    <div className={`bg min-h-screen min-w-screen px-6 font-quick text-light transition-all duration-150 ease-in-out relative overflow-x-hidden ${toggle.open && 'overflow-y-hidden h-screen'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
      <Player />
    </div>
    
  );

}


export default App; 
