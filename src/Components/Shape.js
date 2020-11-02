import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

const Shape =({shape})=>{
    const [state, setState] = useState({
        polyg:1, 
        polyl:1,
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
        polygon:"0 ",
        polyline:'0 ',
        color:'blue'


    
    })
   
    const SVG = document.getElementById('svg')
 const {width,height,circle,line,xradius,yradius,x1,x2,y1,y2} = state
    useEffect(()=>{
       
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
    console.log(state)

    let polygon = []
    let polyline =[]
    

    let rect  =  React.createElement('rect', {width:width, x:50, y:50, stroke:state.color, height:height})
    let Line = React.createElement('line', {x1:x1, x2:x2, y1:y1, y2:y2})
    let circ =  React.createElement('circle',{r:circle, cx:55, cy:75 })
       


    for (let index = 0; index < state.polyline; index++) {
        
        polyline.push(<input name='polyg'  onChange={handleChange} type ='number' placeholder='point'/>)
        }


    for (let index = 0; index < state.polygon; index++) {
        
        polygon.push(<input name='polyl'  onChange={handleChange} type ='number' placeholder='point'/>)
        }


   


    switch (shape) {
        case  'Rectangle':
           return  (<div className='options' >
           <div>
           <input name='width'  id='width' onChange={handleChange} type ='number' placeholder='width'/>
            <label for="width" class="form__label">Width</label>
           </div>
            
          <input name='height'  id='height'  onChange={handleChange} type ='number' placeholder ='height'/>
            <label for="height" class="form__label">Height</label>
           

            {
                
                   
                ReactDOM.createPortal(rect, SVG)      
                
               
                   
                
            }
            </div>) 
            
    case 'Circle':
     return(
         <div className='options'>
         <input name='circle' onChange={handleChange} type ='number' placeholder='radius'/>
         {ReactDOM.createPortal(circ, SVG)
            }
         </div>) 

    case 'Ellipse':
     return(<div className='options'>
        <input name='xradius' value={state} onChange={handleChange}  type ='number' placeholder='xradius'/>
        <input name='yradius' value={state} onChange={handleChange} type ='number' placeholder='yradius'/>
        </div>) 

    case 'Line':
     return(<div className='options'>
        <input name='x1'  onChange={handleChange} type ='number' placeholder='x1'/>
        <input name='x2'  onChange={handleChange} type ='number' placeholder='x2'/>
        <input name='y1'  onChange={handleChange} type ='number' placeholder='y2'/>
        <input name='y2'  onChange={handleChange} type ='number' placeholder='y2'/>
        {
                
            ReactDOM.createPortal(Line, SVG)
            
        
       
           
        
    }
        </div>) 

    case 'Polygon':
     return(<div className='options'>
       

        {polygon}
        <button onClick={()=>handlePoint(Object.keys(state)[0])}>Add New Point</button>
        <button onClick={()=>RemovePoint(Object.keys(state)[0])}>Remove Point</button>
    
       
        
        </div>) 
     case 'PolyLine':
    return(<div>
        {polyline}
        <button onClick={()=>handlePoint(Object.keys(state)[1])}>Add New Point</button>
        <button onClick={()=>RemovePoint(Object.keys(state)[1])}>Remove Point</button>
    
       
        </div>) 
        default:
        return (<p className='default'>Please Pick A Shape</p>)
    }
}

export default Shape

