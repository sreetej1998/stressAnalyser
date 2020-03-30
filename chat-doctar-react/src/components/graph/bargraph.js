import React, { useEffect } from 'react';
import BarChart from 'react-bar-chart';
import MaterialGraph from './MaterailGraph';
 
const data = [
  {text: 'Positive', value: 100}, 
  {text: 'Negitive', value: 300} ,
  {text: 'Neutral', value: 300} 
];
 
const margin = {top: 20, right: 20, bottom: 30, left: 40};

const Example=(props)=>{
  const [data,setData]=React.useState([])

   
    return (<div>
             
            <div style ={{color:'green'}} > 
           <BarChart ylabel='Quantity'
                width={500}
                  height={400}
                  margin={margin}
                  data={props.emotion}
                  /> 
                  
            </div>
    
    </div>)
}

export default Example;