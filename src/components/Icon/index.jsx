import React from 'react';
import styles from './styles.less';

export default ({type}) => {
    if (type=='flag')return (<svg className="icon icon-svg height-16 bookmark" height="16" style={{"width":"16px","height":"16px"}} width="16" strokeWidth="2" version="1.1" viewBox="0 0 16 16" x="0px" y="0px"><path d="M12 2v10.586l-4-4-4 4V2h8m1-1H3v14l5-5 5 5V1z" fill="#9E9E9E"/></svg>)
    return (<svg className="icon icon-svg height-16 close grey" height="16" style={{"width":"16px","height":"16px"}} width="16" strokeWidth="2" version="1.1" viewBox="0 0 16 16" x="0px" y="0px"><g><path d="M3.77 3L13 12.23l-.77.77L3 3.77z" fill="#9E9E9E"/><path d="M13 3.768l-9.23 9.23-.77-.77L12.23 3z" fill="#9E9E9E"/></g>
</svg>)
}
