import classes from "./input.module.css";
import  React  from "react";

const Input = React.forwardRef((params,ref)=>{
  return (
    <div className={classes.input}>
      <label htmlFor={params.input.id}>{params.label}</label>
      <input ref={ref} {...params.input}></input>
    </div>
  );
})

export default Input;
