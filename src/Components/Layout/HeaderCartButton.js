import {useContext } from 'react';
import CardIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton =props => {

    const crtContxt= useContext(CartContext);

    const numberOfCartIteam = crtContxt.items.reduce((curNumber, item) => {
        return curNumber+item.amount

    }, 0)

    return (
    <button className={classes.button} onClick={props.onClick} > 
        <span className={classes.icon}> 
            <CardIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartIteam}
        </span>
    </button>
    );
};

export default HeaderCartButton;