import React, {useState} from 'react'
import {ReactComponent as Logo} from './logo.svg';
import './App.scss';
import Shape from './Components/Shape';

function App() {
  
  

  const [ state, setState] = useState({
    polygon:1,
    polyline:1,
    shape:null,
    width:'',
    points:"",
    points2:"",
        height:'',
        circle:'',
        line:'',
        xradius:'',
        yradius:'',
        x1:'',
        x2:'',
        y1:'',
        y2:'',
        color:'black'
  })
  


  const handlePoint =(vector)=>{
        
    setState( {
        
      ...state,
        [vector]:state[vector]+1
    })
    console.log(state[vector])
}

const RemovePoint =(vector)=>{
  if (state[vector]>1){
      setState({
          
          ...state,
          [vector]:state[vector]-1,
        

      
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

 const Addpoint =(e)=>{
  const {name, value} = e.target
  
  setTimeout(()=>{
    setState({
      ...state,
      [name]:state[name].concat(value, " ")
    })
  }, 700)
  
 }

 


  return (
    <div className="App">

  <header>
 <h1 className='header'>Shape Drawer</h1> 
  
  </header>
 <div className='set-options'>
    
    <label for='color' id='color'>Choose Shape Color</label>
    <input type='color' name="color" onChange={handleChange}/>
    
    
    <label for="shape">Choose a Shape:</label>
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
    RemovePoint={RemovePoint}
    addPoint={Addpoint}/>

    <Logo />
    
    </div>
  );
}

export default App;
