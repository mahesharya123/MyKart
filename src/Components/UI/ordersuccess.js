import{ Modal} from './Modal'
import './ordersuccess.css';
import OrderSuccessImage from "../../assets/3544858.jpg"

const OrderSuccessModal = ({ onClose,orderId }) => {
    return (
        <Modal onClose={onClose}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src={OrderSuccessImage} alt="Success" className="img-fluid"/>
                    <div className="message">
                        <h1>Order Successfully Placed!</h1>
                        <span>OrderID #{orderId}</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccessModal