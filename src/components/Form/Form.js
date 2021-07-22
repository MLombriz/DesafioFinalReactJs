import React, { useEffect, useState } from "react"
import './Form.css'
import { Input } from "../Input/Input";

const Form = ({ formInputs, onInput }) => {

    return (
        <form>
            {formInputs.map(({ label, name, value }, index) => (
                <Input key={index} label={label} name={name} onInput={onInput} value={value} />
            ))}
        </form>
    )
}

export { Form }