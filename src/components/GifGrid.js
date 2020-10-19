import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:gifs, loading} = useFetchGifs(category);
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            {/* SI LOADING ES TRUE MUESTRA EL PARRAFO, SINO NO HACE NADA */}
            <div className="gifs_container">
                {
                    gifs.map((gif) => (
                            <GifGridItem 
                                key={gif.id}
                                {...gif}
                            />
                    ))
                }
            </div>
        </>
    )
};
