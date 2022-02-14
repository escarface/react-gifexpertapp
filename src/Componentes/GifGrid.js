import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {


    const { data:images, loading } = useFetchGifs( category );
    
    console.log(loading);

  return (
    <>
         <h2 className="animate__animated animate__bounce">{ category }</h2>

        { loading && <p className="animate__animated animate__flash">Loading...</p> }

         <div className="card-grid animate__animated animate__bounce">
                    {
                        images.map( img  => (
                            <GifGridItem key = {img.id } {...img}/>
                        ))
                    }
            </div> 
    </>
  )
};
