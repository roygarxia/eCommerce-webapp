import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import Cart from '../../components/cart/cart.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            {
              currentUser ?
              <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
              :
              <Link className='option' to='/signin'>SIGN IN</Link>  
            }
            <CartIcon />
        </div>
        {hidden ? null : <Cart />}       
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);