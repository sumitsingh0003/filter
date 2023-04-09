import React,{ useState } from 'react'
import ArrayData from '../ArrayData';

const Range = () => {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
  
    const [state, setState] = useState(false);
  
  
    const changeWidth = (event) => {
      setWidth(event.target.value);
    };
    const changeHeight = (event) => {
      setHeight(event.target.value);
    };
  
    const finalArray = (ArrayData) => {
      return state===true? ArrayData.sort((a, b) => a.rollno > b.rollno ? 1 : -1) : ArrayData
    }
  
    console.log(state)
  return (
    <>
      <div className='container'>
      <h2>Welcome to KindaCode.com</h2>

      <h4>Box Width: {width}px</h4>
      <input
        type='range'
        onChange={changeWidth}
        min={1}
        max={800}
        step={1}
        value={width}
      ></input>

      {/* Custom range slider */}
      <h4>Box Height: {height}px</h4>
      <input
        type='range'
        onChange={changeHeight}
        min={1}
        max={400}
        step={1}
        value={height}
        className='custom-slider'
      ></input>

      {/* Render the box */}
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className='box'
      ></div>


    <div className='mainarr'>

    {
      finalArray(ArrayData).map((val, i)=>{
        return (
          <div className='arrdata' key={i}>
          {i}
          <h4>Name: {val.name}</h4>
          <span>ROllno.: {val.rollno}</span>
          <p>Class: {val.class} </p>
          <i>Desig : {val.desig}</i>
      </div>
        )
      })
    }
    
    </div>      
    <button onClick={()=>setState(current => !current)}>Filter</button>

    </div>
    </>
  )
}

export default Range
