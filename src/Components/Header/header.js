import './header.css';
import { Watch } from "lucide-react";
import { logout } from '../../actions/auth';
import { Cart } from '../Cart';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export const Header =({count,items,onHandleEvent})=>{
 const navigate = useNavigate();
 const authState = useSelector(state=>state.auth);
 const dispatch = useDispatch();
 const logoutHandler =()=>{
    dispatch(logout())
 }
return(
    <>
     <header className='header'>
        <div className="nav-brand">
           <NavLink exact to={'/'}> <Watch size={45} className="text-gray-800" />
           <span className="text-xl font-bold">Y_Watch</span></NavLink>
        </div>
        <div className="searchBox-container">
            <form>
                <input name="search" type="text"
                    id="search" placeholder="Enter product name, category"/>
                <button type="submit" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                        height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </form>

            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
        </div>
       {
         authState && authState.idToken ?<div className='user-action'> <button  className="circle" onClick={()=>{navigate("/login")}}><h1>{authState.email.slice(0, 2).toUpperCase() }</h1></button> 
          <button onClick={logoutHandler} title="Logout" className="material-icons">logout</button>
         </div>:
         <button   className="login-btn" onClick={()=>{navigate("/login")}}>Login</button>
        }
        <div className="cart-container">
           <Cart count={count} items={items} onHandleEvent={onHandleEvent} />
        </div>
    </header>
    </>
)
}