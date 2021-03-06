import React from 'react'
import homelogo from '../images/home.png';
import './tree.css';
import leftarrow from '../images/leftarrow.png';
import rightarrow from '../images/rightarrow.png';
import Treedata from './datafetch';

import team from '../images/team.png';
import associate from '../images/network.png';

const Top = () => {
  return (
    <div>
        <div className="homebox">
        <div>   
        <img src={homelogo} alt="img" className="homelogo"/>
        </div>
        <div className='homeboxtext'>Reliance Industries Limited </div>
        </div>
        <hr className='firstline' />
        
        <div className='expandbox'>
        <div  ><img src={leftarrow} alt="img" className="arrow"/><span className='etext'>Expand </span></div>   

        </div>
        <hr className='secondline' />
        <div className='expandbox2'>
        <div  ><img src={rightarrow} alt="img" className="arrow"/><span className='etext'>Expand </span></div>   
         
        </div>
        <hr className='thirdline' /><img src={team} alt="img" className="team"/><div className='box1'>Subsidiary </div>
    <img src={associate} alt="img" className="associate"/><div className='box2'>Associate </div>
        <hr className='fourthline' />
        
        <Treedata />
        
    
    </div>
  )
}

export default Top