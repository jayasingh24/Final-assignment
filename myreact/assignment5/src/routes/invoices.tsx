import React from 'react';
import { Link } from 'react-router-dom';
import './route.css';


const invoices = () => {
  return <div>
<h1 className='H1_inv'>Invoices</h1>
<div className='pg_links'>
          <Link to="/">Home</Link>|{"   "}
        <Link to="/invoices">Invoices</Link> |{"   "}
        <Link to="/expenses">Expenses</Link> 
      
        </div>
        <p className='para'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, odit laudantium quod aliquam modi in assumenda perferendis officiis blanditiis cumque architecto enim voluptas! Est labore asperiores saepe ut neque fugiat!
          </p> 
  </div>;
};

export default invoices;
