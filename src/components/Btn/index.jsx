import React from 'react';
import styles from './styles.less';
import Icon from 'components/Icon';
export default ({text,handleClick, icon, classes, to}) => {
    handleClick = handleClick || function(){};
    return (
        <button className={(classes ? classes: "") +' btn-default '+ (icon && "btn-icon")}  onClick={handleClick}>
            {icon && <Icon type={icon}/>}
            {text}
        </button>
    )
}
