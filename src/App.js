
import './App.css';
import {Header} from './Components/Header/header';
import axios from 'axios';
import { Subheader } from './Components/Subheader/subheader';
import {Listitems} from './Components/ListItems/ListItems';
import { useEffect, useState } from 'react';
import { Loader } from './Components/UI/loader';



function App() {
  const [items,setItems] = useState([]);
  const[cartitem,setCartitem ]= useState([]);
  const [loader,setLoader] = useState(true);
  const[eventState,setEventstate] = useState({
    id:"",
    type:""
  })
 
  useEffect(()=>{
    //fetch('https://react-js-d70fc-default-rtdb.firebaseio.com/items.json').then(response=>response.json()).then(data=>{console.log(data)})
    axios.get('https://react-js-d70fc-default-rtdb.firebaseio.com/items.json').then(response=>{
      const data = response.data;
      const transformedata = data.map((item,index)=>{
        return {
        ...item,
        quantity:0,
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

   useEffect(()=>{
   if(eventState.id){
    if(eventState.type===1){
      handleAdditem(eventState.id)
    }
    else{
      handleRemoveitem(eventState.id);
    }
   }

   },[eventState])
  const handleeventState=(id,type)=>{
   console.log(id,type);
    setEventstate({id,type})
  }

  const handleAdditem = (id) => {
   
let data = [...items];
let index = data.findIndex(i=>i.id===id);
data[index].quantity += 1;
setItems([...data])

let cart = [...cartitem];
let ind = cart.findIndex(i=>i.id===data[index].id);
if(ind>-1){
 cart[ind] = data[index];
}
else{
  cart.push(data[index]);
}
setCartitem([...cart]);
}

  const handleRemoveitem=(id)=>{
        
let data = [...items];
let index = data.findIndex(i=>i.id===id);
  if(data[index].quantity!==0){
    data[index].quantity -= 1;
    setItems([...data]);
  }
  let cart = [...cartitem];
  let ind = cart.findIndex(i=>i.id===data[index].id);
  if(cart[ind].quantity===0){
    cart.splice(ind,1);
  }
  else{
    cart[ind] = data[index];
  }
    setCartitem([...cart]);
  }
  return (
   
  <> 
   <div className="App">
  <Header count={cartitem.length} items={cartitem} onHandleEvent={handleeventState}/>
  <Subheader/>
  
  <div className="list">
    {items.map((item) => (
      <Listitems onAdd={handleAdditem} onRemove={handleRemoveitem} key={item.id} data={item} />
    ))}
  </div>

</div>
   
    {loader && <Loader/>}
      
</>

   
  );
}

export default App;
