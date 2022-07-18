import React from 'react';
import Backdrop from '../../../../UI/Backdrop/Backdrop';
import classes from './Confirm.module.css';
const Confirm = (props) => {
    return (
       <Backdrop className={classes.ConfirmOuter}>
        <div className={classes.Confirm}>
            <p className={classes.ConfirmText}>{props.ConfirmText}</p>
            <div>
                <button
                onClick={(e)=>{props.onCancel(e)}}
                className={classes.Cancel}>Cancel</button>
                <button 
                onClick={(e)=>{props.onOk(e)}}
                className={classes.Ok}>Confirm</button>
            </div>
        </div>
       </Backdrop>
    );
};

export default Confirm;