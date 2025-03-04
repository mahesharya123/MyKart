
import './subheader.css'
import { NavLink } from 'react-router-dom'
export const Subheader =()=>{
    return (
        <>
         <div className="subheader-container">
        <ul>
            <li><NavLink className={'nav'} exact to={'/'} >Home</NavLink ></li>
            <li><NavLink className={'nav'} exact to={'/rolex'}>Rolex</NavLink ></li>
            <li><NavLink className={'nav'} exact to={'/omega'}>Omega</NavLink ></li>
            <li><NavLink className={'nav'} exact to={'/tag'}>Tag Heuer</NavLink ></li>
            <li><NavLink className={'nav'} exact to={'/Casio'}>Casio</NavLink ></li>
            <li><NavLink className={'nav'} exact to={'/Breitling'}>Breitling Navitimer</NavLink ></li>
            <li><NavLink className={'nav'} exact to={'/Seiko'}>Seiko Prospex</NavLink ></li>
            <li><NavLink className={'nav'} exact to={'/Tissot'}>Tissot PRX</NavLink ></li>
            <li><NavLink className={'nav'} exact to={'/Citize'}>Citizen Eco-Drive</NavLink ></li>
        </ul>
    </div>
        </>
    )
}