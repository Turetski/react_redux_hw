import React from 'react';
import Loader from 'components/Loader';
import * as pageActions from 'actions/pageActions';
import VacancyItem from 'components/VacancyItem';
import Paginator from 'containers/Paginator';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import styles from './styles.less';

class Vacancies extends React.Component {
    componentWillMount(){
        const {loadVacancies} = this.props.pageActions;
        loadVacancies(this.props.limit,this.props.page);
    }
    componentWillReceiveProps(nextProps){
        const {loadVacancies} = this.props.pageActions;
        if(nextProps.page!=this.props.page){
            loadVacancies(this.props.limit,nextProps.page);
        }
    }
    render() {
        
        return (
            <div className="vacancies">
                <div className="wrapper">
                    <Paginator/>
                    <div className="vac-items">
                        {(!this.props.isLoaded) ? 
                            <Loader/>:
                            this.props.data.map(vacancy => (
                            <VacancyItem data={vacancy} key = {vacancy.id}/>
                        ))}
                    </div>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps (state, props) {
    let search = props.location.search,
        newPage=0;
    if(search){
        let _tmp = search.match(/page=(\d+)/i);
        if(_tmp&&_tmp[1]) newPage = _tmp[1];
    }
    return {
        isLoaded: state.vacancies.isLoaded,
        limit: state.vacancies.limit,
        page: newPage,
        data: state.vacancies.entities
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Vacancies))