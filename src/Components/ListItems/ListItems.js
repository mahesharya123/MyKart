
import { useState } from 'react';
import cartitem from '../../assets/cart.png';
import { Modal } from '../UI/Modal';

import     './ListItems.css';
import { useDispatch, useSelector } from 'react-redux';

  
export const Listitems =({data })=>{
          
  
//const [counter, setCounter] = useState(0);
const [showModal,setshowModal] =useState(false);

const item = useSelector(state => state.items.find(item => item.id === data.id));

const dispatch = useDispatch();
const descreaseCounterByOne = (event) => {
    event.stopPropagation();
 dispatch({
    type:'REMOVE_ITEM',
    payload:{
        id:data.id
    }
 })
};

const increaseCounterByOne = event => {

    event.stopPropagation();
    dispatch({
        type:'ADD_ITEM',
       payload:{item:data}
      }
     
    )
};
  const handleModal=()=>{
    setshowModal(previousState=>!previousState)
    console.log(data.description);
  }
    return (
        <>
        
        <div  onClick={handleModal} className='card'>
             <div className='img-card'> 
                <img  className='img' src ={`/assets/${data.thumbnail}`} alt='watch'/>
                
             </div>
              <div className='price'>
                <span>₹{data.discountedprice}</span>
                <small>
                    <strike>₹{data.price}</strike>
                </small>
                <div className='title'>
                    <span>{data.title} </span>
                </div>
                <div>
                {!item || item?.quantity < 1 ? 
                <button className="cart-add" onClick={increaseCounterByOne}>
                    <span>Add to Cart</span>
                    <img src={cartitem} alt="Cart Icon"/>
                </button>
             : 
                <div className="cart-addon">
                    <button onClick={descreaseCounterByOne}><span>-</span></button>
                    <span className="counter">{item.quantity}</span>
                    <button onClick={increaseCounterByOne}><span>+</span></button>
                </div>
            }
                 
                </div>
              </div>
        </div>
        {showModal && <Modal onClose={handleModal}> 

        <div className="modal-pop">
                        <div className="img-wrap">
                            <img className='img-fluid' src={`/assets/${data.thumbnail}`} alt={data.title}/>
                        </div>
                        <div className='disc'> <p>{data.description}</p></div>
                        </div>
                        <div className="meta">
                            <div className='p-t'>
                            <h3>{data.title}</h3>
                            <div className="price">
                               <b><span> ₹{data.discountedprice}</span></b> 

                                <sup>
                                   <i><strike>₹{data.price}</strike></i> 
                                </sup>
                               
                            </div>
                            </div>
                            <div className='adcart'>
                            {!item||item?.quantity <1? 
                <button className="cart-add" onClick={increaseCounterByOne}>
                    <span>Add to Cart</span>
                    <img src={cartitem} alt="Cart Icon"/>
                </button>
             : 
                <div className="cart-addon">
                    <button onClick={descreaseCounterByOne}><span>-</span></button>
                    <span className="counter">{item.quantity}</span>
                    <button onClick={increaseCounterByOne}><span>+</span></button>
                    
                </div>
                            
           
                            
                         
               
            } </div> 
            </div>
        
                    
            </Modal>}
        </>
    )
}