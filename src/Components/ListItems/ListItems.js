
import { useState } from 'react';
import cartitem from '../../assets/cart.png';
import { Header } from '../Header/header';
import { Subheader } from '../Subheader/subheader';
import     './ListItems.css';

  
export const Lisitems =({data})=>{

    const [isAdded, setIsAdded] = useState(false);
const [counter, setCounter] = useState(1);
const handleClick = () => {
    setIsAdded(true); // Show the quantity buttons
};

const descreaseCounterByOne = () => {
    if (counter > 1) {
        setCounter(counter - 1);
    } else {
        setIsAdded(false); // Hide counter and show "Add to Cart" when quantity is 0
    }
};

const increaseCounterByOne = () => {
    setCounter(counter + 1);
};

    return (
        <>
          <header>
        <div>  <Header/></div>
          <Subheader/>
          </header>
        <div className='card'>
             <div className='img-card'> 
                <img  className='img' src ={`/assets/${data.thumbnail}`} alt='watch'/>
                
             </div>
              <div className='price'>
                <span>${data.discountedprice}</span>
                <small>
                    <strike>${data.price}</strike>
                </small>
                <div className='title'>
                    <span>{data.title} </span>
                </div>
                <div>
                {!isAdded ? (
                <button className="cart-add" onClick={handleClick}>
                    <span>Add to Cart</span>
                    <img src={cartitem} alt="Cart Icon"/>
                </button>
            ) : (
                <div className="cart-addon">
                    <button onClick={descreaseCounterByOne}><span>-</span></button>
                    <span className="counter">{counter}</span>
                    <button onClick={increaseCounterByOne}><span>+</span></button>
                </div>
            )}
                 
                </div>
              </div>
        </div>
        </>
    )
}