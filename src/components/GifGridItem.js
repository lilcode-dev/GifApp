import React from 'react';
import PropTypes from 'prop-types';

export const handleMouseEnter = (e, remove, add) => {
    e.preventDefault();
    let { classList } = e.target.parentElement;
    console.log(classList);
    if (classList.contains(remove)) {
        classList.remove(remove);
        
    }
    classList.add(add);
    setTimeout(() => {
        classList.remove(add);
    }, 1000);
};
export const GifGridItem = ({ title, url }) => {
    
    return (
        <div
        className="card animate__animated animate__fadeInDownBig"
        onMouseEnter={(e) => {
            handleMouseEnter(e, 'animate__fadeInDownBig', 'animate__tada');
        }}
        >
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    );
};

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
