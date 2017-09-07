import React from 'react';
import styles from './styles.less';

export default ({min, max, currency}) => {
    if(min>0 && max>0)return (
        <span className="salary">
            {min} &ndash; {max} {currency}
        </span>
    )
    if(min==0 && max==0)
        return (
        <span className="salary">
            договорная
        </span>
    )
    if(min>0)
        return (
        <span className="salary">
            от {min} {currency}
        </span>
    )
    return (
        <span className="salary">
            до {max} {currency}
        </span>
    )
}