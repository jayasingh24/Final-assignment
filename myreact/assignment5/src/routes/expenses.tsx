import React from 'react';
import { Link } from 'react-router-dom';
import './route.css';


const expenses = () => {
  return <div>
<h1 className='H1_exp'>Expenses</h1>
      <div className='pg_links'>
          <Link to="/">Home</Link>|{"   "}
        <Link to="/invoices">Invoices</Link> |{"   "}
        <Link to="/expenses">Expenses</Link> 
        </div>
        <p className='para'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ipsum sit explicabo molestias saepe enim eius repellendus asperiores, delectus quidem corrupti. Adipisci maiores laboriosam voluptatum iste iusto molestias quos quibusdam obcaecati sequi labore quod possimus inventore, ut adipisci laudantium id aut? Numquam consectetur suscipit ad similique deserunt porro impedit, aliquam reprehenderit debitis laborum modi ut nostrum mollitia, cum adipisci, nisi dolor atque nam? Architecto dolorum temporibus quo suscipit maxime dignissimos eius quod repudiandae nisi alias sit officia aliquid minima eaque cumque sint, cum omnis? Inventore quam ullam dolorem esse qui modi, corporis ex quos architecto facilis possimus eos distinctio eligendi ad soluta ut, error excepturi natus iste harum reprehenderit quibusdam. Quam enim reiciendis sit laborum sed deleniti eaque earum, porro non animi placeat autem recusandae dicta, nihil tempore cum tempora maiores dolorum praesentium quasi consequuntur quae. Recusandae commodi maxime exercitationem dolore dolorum! Eius libero eos labore necessitatibus, earum minus neque laboriosam quisquam sed inventore quo ullam optio excepturi voluptate maxime dolor maiores sit est, dignissimos repellendus nisi aperiam asperiores at ut? Quos provident consequatur eveniet amet placeat libero impedit soluta officiis maiores quas numquam dicta, nemo, modi incidunt.
        </p>
  </div>;
};

export default expenses;
