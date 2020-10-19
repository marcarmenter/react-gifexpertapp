import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => { //props.setCategories

    const defVal = " Introduzca categoria";
    const [inVal, setInVal] = useState('');

    const handleInputChange = (e) => {
        setInVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inVal.trim().length > 0) {
            setCategories(c => [inVal, ...c]); 
            setInVal('');
        }

        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder={defVal}
                value={inVal}
                onChange={e => handleInputChange(e)}
                onBlur={() => setInVal('')}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
