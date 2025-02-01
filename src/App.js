
import './App.css';
import {Header} from './Components/Header/header';
import axios from 'axios';
import { Subheader } from './Components/Subheader/subheader';
import { Lisitems } from './Components/ListItems/ListItems';
import { useEffect, useState } from 'react';
import { Loader } from './Components/UI/loader';


function App() {
  const [items,setItems] = useState([]);
  const [loader,setLoader] = useState(true);
  useEffect(()=>{
    //fetch('https://react-js-d70fc-default-rtdb.firebaseio.com/items.json').then(response=>response.json()).then(data=>{console.log(data)})
    axios.get('https://react-js-d70fc-default-rtdb.firebaseio.com/items.json').then(response=>{
      const data = response.data;
      const transformedata = data.map((item,index)=>{
        return {
        ...item,
        id:index
        }
      })
      setItems(transformedata);
      setLoader(false);
    })
    .catch(err=>{
      setLoader(false);
      console.log(err)})
    

  

  },[])
  return (
   
  <>  <div className="App">
  <Header/>
  <Subheader/>
  
  <div className="list">
    {items.map((item) => (
      <Lisitems key={item.id} data={item} />
    ))}
  </div>

</div>
    {loader && <Loader/>}
</>
   
  );
}

export default App;
