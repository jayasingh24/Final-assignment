import React from 'react';
import { Link } from 'react-router-dom';
import { StatexampleProps , Statexamplestate } from './interface';
import './route.css';

class Statexample extends React.Component<StatexampleProps ,Statexamplestate> {

constructor(props: StatexampleProps ) {
  super(props);

  this.state= {
    count: 0
  }

}

onaddition = () => {
  this.setState(function (prevState)
  {
    return{
      count : prevState.count +1
    }
  }
  );
}

onminus = () =>  {
  this.setState(function (prevState)
  {
    return{
      count:prevState.count -1
    }
  }
  );
}
  render(){

 const {ownername} = this.props;
 const {count} = this.state;
  return <div className='stateex'>
    <h1>Example showing states in react</h1>
    <h2>Owner name : {ownername}</h2>
    <h3>counter: {count}</h3>
    <button className='but' onClick={this.onaddition}>Add</button>
    <button className='but' onClick={this.onminus}>Minus</button>
    
  </div>;
}
}

export default Statexample ;
