import React, { Fragment, useContext } from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../../../store/Cart-context";

const Counter = (props) => {

const ctx = useContext(CartContext);
 
  const addButtonHandler = () => {
    ctx.addItem(props.meal);
    
  };
  const subButtonHandler = () => {
    ctx.removeItem(props.meal); 
  };

  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button onClick={subButtonHandler} className={classes.Sub}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.count}>{props.meal.amount}</span>
        </>
      ) : null}

      <button onClick={addButtonHandler} className={classes.Add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
