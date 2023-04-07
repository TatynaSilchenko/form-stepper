import React from 'react';

const Checkbox = ({ name, label, value, onChange, ...props }) => {
    console.log('check', value)
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name={name}
                    checked={value}
                    onChange={onChange}
                />
                {label}
            </label>
        </div>
    );
};

export default Checkbox;