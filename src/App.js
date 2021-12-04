import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {useEffect} from "react";
import Navbar from './Component/Navbar';

import Todolist from './Component/Todolist';

function App() {
  const[state,setState]=useState("");
  const[state2,setState2]=useState(3);
  const[state3,setState3]=useState("ravi");
  const[toToggle, setToToggle]= useState(false);
  const[Toggle,settoggle]=useState(false);
  const[abc,setabc]=useState("z");
  
  return (
    <>
     <Navbar/>  
 
    </>
      );
}

export default App;
