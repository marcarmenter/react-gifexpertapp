import React from 'react';
import '../index.css';

export const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={url} alt={title} />
            <hr />
            <a href={url}>Giphy link</a>
        </div>
    )
}