import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'SNK', 'BNHA'];
    
    const [categories, setCategories] = useState(['BNHA']);

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'One Piece'] );
    //     setCategories( categories => [...categories, 'One Piece'] );
    // };

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </div>
    )
}
