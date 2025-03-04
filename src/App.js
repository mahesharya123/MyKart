
import './App.css';
import {Header} from './Components/Header/header';
import axios from 'axios';
import { Subheader } from './Components/Subheader/subheader';
import {Listitems} from './Components/ListItems/ListItems';
import { AuthIndex } from './Components/Auth';
import { useEffect, useState } from 'react';
import { Loader } from './Components/UI/loader';
import { Routes,Route,Navigate } from 'react-router-dom';
import { checkIsLoggedIn } from './actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from './Components/Footer/Footer';




function App() {
  const [items,setItems] = useState([]);

  const [loader,setLoader] = useState(true);

  const authState = useSelector(state=>state.auth);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkIsLoggedIn(() =>  {}))
  },[dispatch])

  useEffect(()=>{
    //fetch('https://react-js-d70fc-default-rtdb.firebaseio.com/items.json').then(response=>response.json()).then(data=>{console.log(data)})
    axios.get('https://react-js-d70fc-default-rtdb.firebaseio.com//items.json').then(response=>{
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
   
  <> 

   <div className="App">
   <Header />
   <Subheader />
   <Routes>
               {/* Redirect to auth pages if not logged in */}
  {!authState.idToken ? (
    <>
      <Route path="/auth/:type" element={<AuthIndex />} />
      <Route path="/login" element={<Navigate to="/auth/login" />} />
      <Route path="/signup" element={<Navigate to="/auth/signup" />} />
    </>
  ) : (
    <>

<Route path="/auth/:type" element={<Navigate to="/" />} /> 
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/signup" element={<Navigate to="/" />} />
    </>
  )}
        <Route path="/404" element= {loader && <Loader />} />
        <Route 
          path="/:type?" 
          element={
            <div className="list">
              {items.length > 0 ? (
                items.map((item) => (
                  <Listitems key={item.id} data={item} />
                  
                ))
              ) : (
                <Loader/>
              )}
             
              {loader && <Loader />}
            </div>
          } 
        />
       <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer/>
      </div>
      
</>

   
  );
}

export default App;