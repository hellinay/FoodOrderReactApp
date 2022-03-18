import classes from "./Card.module.css";

function Card(params) {
    
    return <div className={classes.card}>{params.children}</div>

}

export default Card;