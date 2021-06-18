import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
    const handleMouseEnter = (e, remove, add) => {
        e.preventDefault();
        let { classList } = e.target;
        console.log(classList);
        if (classList.contains(remove)) {
            classList.remove(remove);
        }
        classList.add(add);
        setTimeout(() => {
            classList.remove(add);
        }, 800);
    };

    return (
        <>
            <h3 className="animate__animated animate__shakeY" onMouseEnter={(e) => {
                handleMouseEnter(e,
                    'animate__shakeY',
                    'animate__shakeY')
            }}> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
