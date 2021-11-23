import React from 'react';
import Icon from '@ant-design/icons';
import GooglePlus from '@/styles/icons/google+.svg';

const GooglePlusIcon = ({...rest}) => {
    return (
            <Icon component={GooglePlus} {...rest}/>
    );
};

export default GooglePlusIcon;
