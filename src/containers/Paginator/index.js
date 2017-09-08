import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter, Link } from 'react-router-dom';
import * as pageActions from 'actions/pageActions';
import styles from './styles.less';

class Paginator extends React.Component {
    render() {
        let curPage = parseInt(this.props.page,10),
            nextPage = curPage+1,
            prevPage = curPage-1;
            console.log(curPage)
        return (
            <div className="paginator">
                 <Link className={'pag-link'} disabled={prevPage< && ' disabled'} to={'/vacancies?page='+prevPage}>Предыдущая</Link>
                 <Link className='pag-link' to={'/vacancies?page='+nextPage}>Следующая</Link>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        page: state.vacancies.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Paginator))