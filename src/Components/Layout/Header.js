import { Fragment } from 'react';
import headerImage from '../../assets/meals.jpeg';
import classes from './Header.Module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>{

    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Order App</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={headerImage} alt='A table full of delicious food!!'/>
        </div>
    </Fragment>
    );
};

export default Header;

