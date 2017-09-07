import React from 'react';

export default ({data}) => {
    if(data.contact.subway)return (
        <span className="vacancy-location">
            {data.contact.city.title},
            <span className="dot-delimeter"/>
            {data.contact.subway.title}
        </span>
    )
    if(data.contact.street)return (
        <span className="vacancy-location">
            {data.contact.city.title},&thinsp;
            {data.contact.street},&thinsp;
            {data.contact.building}
        </span>
    )
    return (
        <span className="vacancy-location">
            {data.contact.city.title}
        </span>
    )
}
