import React from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as pageActions from 'actions/pageActions';
import Vacancies from 'containers/Vacancies';
import styles from './styles.less';


class App extends React.Component {
    componentWillReceiveProps(props) {
    }
    render() {
        return (
            <div className="container">
                 <Switch>
                    {/*<Route exact path='/' component={(props) => <Page {...props}/>}/>*/}
                    <Route exact path='/vacancies' component={Vacancies}/>
                </Switch>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        isLoading: state.vacancies.isLoading,
        isLoaded: state.vacancies.isLoaded,
        limit: state.vacancies.limit,
        page: state.vacancies.page,
        totalCount: state.vacancies.totalCount
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))