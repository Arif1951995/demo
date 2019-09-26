import React from 'react';
import './Services.css';
import PropTypes from 'prop-types';

function Service(props) {
    return (
       
        <li >
                    <i>{props.icon}</i>
                    <h3>{props.h3}</h3>
                    <p>{props.para}</p>
        </li>
    )
}

Service.propTypes = {
    i: PropTypes.string,
    h3: PropTypes.string,
    para: PropTypes.string,
}

export default Service;
