import React from 'react';
import BarChart from 'react-bar-chart';
 
const data = [
  {text: 'Positive', value: 100}, 
  {text: 'Negitive', value: 300} ,
  {text: 'Neutral', value: 300} 
];
 
const margin = {top: 20, right: 20, bottom: 30, left: 40};

const Example=(props)=>{
    const handleBarClick=()=>{
    }
    return (<div>
             
            <div style ={{color:'green'}} > 
                <BarChart ylabel='Quantity'
                width={500}
                
                  height={400}
                  margin={margin}
                  data={props.emotion}
                  onBarClick={handleBarClick}/>
            </div>
    
    </div>)
}

export default Example;