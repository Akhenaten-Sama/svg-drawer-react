import React, {useState, useEffect} from 'react'
import {ReactComponent as Logo} from './logo.svg';
import './App.scss';
import Shape from './Components/Shape';

function App() {
  
  

  const [ state, setState] = useState({
    polyg:1, 
    polyl:1,
    polygon:"0 ",
        polyline:'0 ',
    shape:null,
    width:'',
        height:'',
        circle:'',
        line:'',
        xradius:'',
        yradius:'',
        x1:'',
        x2:'',
        y1:'',
        y2:'',
        color:'blue'
  })
  


  const handlePoint =(vector)=>{
        
    setState({
        ...state,
        [vector]:state[vector]+1
    })
    console.log([vector])
}

const RemovePoint =(vector)=>{
  if (state[vector]>1){
      setState({
          
          ...state,
          [vector]:state[vector]-1
      
      })
     
  }
  
}

const handleChange =(e)=>{
  const {name, value} = e.target
  setState({
      ...state,
      [name]:value
  })
   
 }


  console.log(state.shape)
  return (
    <div className="App">
    <div>
    <input type='color' name="color" onChange={handleChange}/>
    <label for="select-shape">Choose a pet:</label>

    <select onChange={handleChange} name="shape" id="shape-select">
        <option value={null}>--Please choose an option--</option>
        <option value="Circle">Circle</option>
        <option value="Rectangle">Rectangle/Square</option>
        <option value="Line">Line</option>
        <option value="Ellipse">Ellipse</option>
        <option value="Polygon">Polygon</option>
        <option value="PolyLine">PolyLine</option>
    </select>
    </div>
    
    <Shape  
    state={state}
    handleChange={handleChange}
    handlePoint = {handlePoint}
    RemovePoint={RemovePoint}/>

    <Logo />
    
    </div>
  );
}

export default App;
