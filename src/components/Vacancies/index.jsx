import React from 'react';
import VacancyItem from 'components/VacancyItem';
import styles from './styles.less';

export default class Vacancies extends React.Component {
    render() {
        return (
            <div className="vacancies">
                {this.props.data.map(vacancy => (
                    <VacancyItem data={vacancy} key = {vacancy.id}/>
                ))}
            </div>
        )
    }
}