import ReactDom from 'react-dom'
import { Fragment } from 'react'
import './Modal.css'
import { Backdrop } from './loader';
export const Modal=({onClose,children})=>{
    return(
      ReactDom.createPortal(
        <Fragment> 
        <Backdrop onClose={onClose}/>
        <div className='modal'>
        <button type='close'className='bttn' onClick={onClose}>X</button>
          <div className='content'>
           {children}
          </div>
      
        </div>
    </Fragment>,
    document.getElementById('modal-root')
      )
    )
}