import { Fragment, useState } from "react"
import { Modal } from "../UI/Modal"
import {Kartitems} from'./Kartitems'
import './cart.css'
import OrderSuccessModal from "../UI/ordersuccess"


export const  Cart =({count,items,onHandleEvent})=>{
  const[showModal,setshowModal]= useState(false);
  const [ordermodal,setOrdermodal] = useState(false);
 const handleModal =()=>{
    setshowModal(prevState=>!prevState);
 }
  const handleOrderModal = ()=>{
    setOrdermodal(prevState=>!prevState);
    setshowModal(false);
  }
    return(
        <Fragment>

           <button onClick={handleModal}>
                <span data-items= {count} >Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>

            {showModal && <Modal onClose={handleModal}>
            <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                            {
                                count > 0 ?
                                items.map(
                                    item=>{return( <Kartitems data={item} 
                                        key={item.id} 
                                        onEmitIncreaseitem={id=>onHandleEvent(id,1)}
                                     onEmitDecreaseitem={id=>onHandleEvent(id,-1)}/>)})
                                 :
                                <div className="empty-cart">Please add something in your cart!</div>
                            }
                        </div>
                        { 
                            count > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount: </h4>
                                    <h4>{
                                        items.reduce((previous, current)=>{
                                            return (previous + (current.discountedprice.replace(/[^0-9.]/g, "") * current.quantity));
                                        },0)
                                        } INR</h4>
                                </div>
                                <button className="buttn" onClick={handleOrderModal}>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>}
                {ordermodal && <OrderSuccessModal onClose={handleOrderModal}/>}
        </Fragment>
        
    )
}