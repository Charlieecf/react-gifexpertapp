import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');  // Es un string vacio, si no se pusiera nada sería undefined

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            // console.log('SubmitHecho')
            setCategories( categories => [ inputValue, ...categories ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

// Poner 'setCategories' como requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}