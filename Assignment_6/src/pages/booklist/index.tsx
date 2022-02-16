


import {useEffect , useState} from "react";
import API from "../../services/api.service";
import style from './booklist.module.scss';
import HeaderComponent from "../../component/header";
  
function BooklistComponent() {
  
const [ data, setBookList] = useState([])
  useEffect(() =>  {
    const token = localStorage.getItem('token');
    if(token) {
        API.defaults.headers.common['Authorization'] = token;
        API.get('books/list/1').then((res)=>{
            console.log(res);
            setBookList(res.data.data);
        });
    }
},[]);

interface listing {
  user_id:number;
  name:string;
  author:string;
  image:string;
}


  return (
    <div>
    <HeaderComponent  />
    <div className={style.bookpage}>
        <h3>Book Listing page</h3>
      
       { data.map((item:listing , index: number)=>
     
        <ul>
     
          <li className={style.lists} key={index}>{item.user_id} <br />{item.name} <br />{item.author} <br />{item.image}</li>
          
          
        </ul> )}
        )
    </div>
    </div>
  );
}
  
export default BooklistComponent;