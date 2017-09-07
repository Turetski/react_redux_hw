import React from 'react';
import Page from '../components/Page';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../actions/pageActions';
import styles from './styles.less';

class App extends React.Component {
    componentWillReceiveProps(props) {
       
    }

    render() {
        const isLoading = this.props.isLoading, 
            isLoaded = this.props.isLoaded,
            vacancies = this.props.vacancies;
        const {loadVacancies} = this.props.pageActions;
        return (
            <div className="container">
               <Page loadBtnClick={loadVacancies} isLoading={isLoading} isLoaded={isLoaded} vacancies={this.props.vacancies}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        vacancies: state.vacancies.entities,
        isLoading: state.vacancies.isLoading,
        isLoaded: state.vacancies.isLoaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)