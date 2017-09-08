import React from 'react';
import Btn from 'components/Btn';
import Location from 'components/Location';
import Salary from 'components/Salary';
import styles from './styles.less'
function parseMonth(m){
    let data ={0:"января",1:"февраля",2:"марта",3:"апреля",4:"мая",5:"июня",6:"июля",7:"августа",8:"сентября",9:"октября",10:"ноября",11:"декабря"};
    return data[m];
}
function formatDate(x) {
    let date = new Date(x);
  return "".concat(date.getDate(),' ',parseMonth(date.getMonth()),' в ',date.getHours(),':',date.getMinutes());
}//todo

export default class VacancyItem extends React.Component {
    render() {
        let data= this.props.data;
        return (
            <div className="vacancy-container">
                <div className="info-left">
                    <h2 className="vacancy-header">
                        <span className="vacancy-title"> {data.header} </span>
                        {data.is_premium && <span className="vacancy-premium">Премиум вакансия</span>}
                    </h2>
                    <span className="vacancy-company">
                        {data.company.title}
                    </span>
                    <div className="vacancy-desc">
                        <span className="vacancy-date">
                            {formatDate(data.add_date)}
                        </span>
                        <Location data={data}/>
                    </div>
                </div>
                <div className="info-right">
                    <Salary min={data.salary_min} max={data.salary_max} currency={data.currency.title}/>
                    <span>{data.working_type&&data.working_type.title}</span>
                    <span>{data.schedule&&data.schedule.title}</span>
                </div>
                {
                   <div className="company-logo">
                        <img className='company-img' src={data.company.logo && data.company.logo.url} alt={data.company.title}/>
                   </div>
                }
                <div className="controls">
                    <Btn text="Развернуть" icon = ""/>
                    <Btn text="В избранное" icon = "flag"/>
                    <Btn classes="hidden" text="Скрыть" icon = "close"/>
                </div>
              
            </div>
        )
    }
}