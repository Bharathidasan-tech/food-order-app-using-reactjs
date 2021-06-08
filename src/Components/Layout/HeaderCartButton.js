import {useContext } from 'react';
import CardIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton =props => {

    const crtContxt= useContext(CartContext);

    const numberOfCartIteam = crtContxt.items.length;

    return (
    <button className={classes.button} onClick={props.onClick} > 
        <span className={classes.icon}> 
            <CardIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
    );
};

export default HeaderCartButton;