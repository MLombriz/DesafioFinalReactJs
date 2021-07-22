import React from 'react'
import './Input.css'

const Input = ({ label, name, value, onInput }) => {
    return (
        <label>
            {label}
            <input name={name} type="text" onChange={onInput} />
        </label>
    )
}

export { Input }