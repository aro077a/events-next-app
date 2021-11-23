import React from 'react';
import Icon from '@ant-design/icons';
import Cart from '@/styles/icons/cart.svg';

const CartIcon = ({...rest}) => {
    return (
            <Icon component={Cart} {...rest}/>
    );
};

export default CartIcon;
