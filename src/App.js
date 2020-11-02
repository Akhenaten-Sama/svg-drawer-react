import React, {useState, useEffect} from 'react'
import {ReactComponent as Logo} from './logo.svg';
import './App.scss';
import Shape from './Components/Shape';

function App() {
  
  

  const [ state, setState] = useState({
    shape:null
  })
  const handleChange =(e)=>{
     const shape = e.target.value
     setState({shape:shape})
  }
  console.log(state.shape)
  return (
    <div className="App">
    <div>
    <label for="select-shape">Choose a pet:</label>

    <select onChange={handleChange} name="pets" id="shape-select">
        <option value={null}>--Please choose an option--</option>
        <option value="Circle">Circle</option>
        <option value="Rectangle">Rectangle/Square</option>
        <option value="Line">Line</option>
        <option value="Ellipse">Ellipse</option>
        <option value="Polygon">Polygon</option>
        <option value="PolyLine">PolyLine</option>
    </select>
    </div>
    
    <Shape  shape={state.shape}/>

    <Logo />
    
    </div>
  );
}

export default App;
