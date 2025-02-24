import './header.css';
import { Cart } from '../Cart';
export const Header =({count,items,onHandleEvent})=>{
   
return(
    <>
     <header className='header'>
        <div className="nav-brand">
            <a href='/'>
                <span>MyKart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30"
                    height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            </a>
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
       <button className="login-btn" >Login</button>
        <div className="cart-container">
           <Cart count={count} items={items} onHandleEvent={onHandleEvent} />
        </div>
    </header>
    </>
)
}