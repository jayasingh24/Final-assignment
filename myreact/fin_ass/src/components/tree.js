import React from 'react'

 import Top from './top'
import './tree.css';
import viewlogo from '../images/network.png';


const Tree = () => {
  
  return (
    <div>
       <div className="topbut" >  
<button className="but1" > <img src={viewlogo} alt="img" className="viewlogo"/>
   View Full Tree
</button>
</div>

    <div>
        <Top/>
    </div>
    
    </div>
  )
}

export default Tree