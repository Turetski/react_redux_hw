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
            prevPage = curPage-1,
            lastPage = Math.ceil(this.props.totalCount/this.props.limit),
            firstPageLink = curPage-2,
            lastPageLink = curPage+2,
            pages=[];
        if(firstPageLink<0) {
            firstPageLink = 0;
            lastPageLink = firstPageLink+4;
        }
        if(lastPageLink>lastPage) lastPageLink = lastPage;
        for(let i=firstPageLink; i<=lastPageLink; i++){
            pages.push(i)
        }
        console.log(pages);
        return (
            <div className="paginator">
                {
                    prevPage>=0 ? <Link className={'pag-link'} to={'/vacancies?page='+prevPage}>Предыдущая</Link>
                        :<span className='pag-link'>Предыдущая</span>
                }
                {    pages.map(num=>(
                        <Link className = {'pag-button'} to={'/vacancies?page='+num}>{num}</Link>
                    ))
                }
                {    nextPage<lastPage ? <Link className='pag-link' to={'/vacancies?page='+nextPage}>Следующая</Link>
                        :<span className='pag-link'>Следующая</span>
                }
                
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        page: state.vacancies.page,
        totalCount: state.vacancies.totalCount,
        limit: state.vacancies.limit
    }
}
function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Paginator))