import React from 'react';

const input = ({inputClass, placeholder}) => {
    return (
        <div>
                <input type={type} className={inputClass} placeholder={placeholder}  />
        </div>
    );
};

export default input;