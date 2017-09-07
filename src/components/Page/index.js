import React from 'react';
import Btn from 'components/Btn';
import Loader from 'components/Loader';
import Vacancies from 'components/Vacancies';

export default class Page extends React.Component {
    onLoadBtnClick(e) {
        this.props.loadBtnClick();
    }
    render() {
        if(this.props.isLoading) return(<Loader/>);
        if(this.props.isLoaded) return(<Vacancies data={this.props.vacancies} limit="25"/>);
        return (<Btn text="Загрузить" handleClick={this.onLoadBtnClick.bind(this)} icon = ""/>)
    }
}