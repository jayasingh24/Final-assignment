
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Statexample from './routes/statexample';


function App() {
  
  return (
    <div className="App">
      
      <h1 className='Heading1'>This is React Router Tutorial</h1>
      
      
        <Link to="/ ">Home</Link>|{"   "}
        <Link to="/invoices">Invoices</Link> |{"   "}
        <Link to="/expenses">Expenses</Link> 
      
      <Outlet />
     
      < Statexample ownername='Jaya Singh' />
          

     </div>
     
  );
}

export default App;