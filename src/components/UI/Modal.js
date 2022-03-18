import classes from "./Modal.module.css";
import reactDom from "react-dom";

function Backdrop(params) {
    return <div className={classes.backdrop}></div>
}

function ModalOverlay(params) {
    return <div className={classes.modal}>
     <div className={classes.content}>{params.children}</div>
     </div>
}

const portalElement= document.getElementById('overlays')

function Modal(params) {

return(<>
{reactDom.createPortal(<Backdrop></Backdrop>,portalElement)}
{reactDom.createPortal(<ModalOverlay>{params.children}</ModalOverlay>,portalElement)}
</>)

}

export default Modal;