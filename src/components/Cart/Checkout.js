import  classes  from "../Cart/Checkout.module.css";

import { useRef,useState } from "react";


const isEmpty =value => value.trim() === ''


const isFiveChars = value => value.trim().lenght !== 5



function Checkout(props) {



    const[formInputValidty, setForumInputValidty]=useState({
        name:true,
        street:true,
        city:true,
        postalCode:true
    })

    const nameInputRef=useRef();
    const streetInputRef=useRef();
    const postalCodeInputRef=useRef();
    const cityInputRef=useRef();



function confirmHandler(event) {
    event.preventDefault()
    //browser default is prevented

    const enteredName=nameInputRef.current.value
    const enteredPostal=postalCodeInputRef.current.value
    const enteredStreet=streetInputRef.current.value
    const enteredCity=cityInputRef.current.value

    const enteredNameIsValid=!isEmpty(enteredName)
    const enteredCityisValid=!isEmpty(enteredCity)
    const enteredStreetIsValid=!isEmpty(enteredStreet)
    const enteredPostalIsValid=isFiveChars(enteredPostal)



    setForumInputValidty({
        name:enteredNameIsValid,
        street:enteredStreetIsValid,
        postalCode:enteredPostalIsValid,
        city:enteredCityisValid
    })

    console.log(setForumInputValidty.name,setForumInputValidty.street,setForumInputValidty.city,setForumInputValidty.postalCode)
    const formIsValid= enteredNameIsValid && enteredCityisValid && enteredPostalIsValid && enteredStreetIsValid;

    if(!formIsValid){
        return;
    }

    props.onConfirm({
        name:enteredName,
        street:enteredCity,
        city:enteredCity,
        postalCode:enteredPostal
    })

    //submit cart data 
}

return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputValidty.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
      {!formInputValidty.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${formInputValidty.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidty.street && <p>Please enter a street name</p>}

      </div>
      <div className={`${classes.control} ${formInputValidty.postalCode ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
        {!formInputValidty.postalCode && <p>Please enter a postal code </p>}

      </div>
      <div className={` ${classes.control} ${formInputValidty.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'ref={cityInputRef} />
        {!formInputValidty.city && <p>Please enter a city name</p>}

      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
