import React from 'react'

function useForm() {
    const [value, setValue] = React.useState("")
    const [error, setError] = React.useState(null)

    function validate(value) {
        if(value.length === 0) {
            setError(`Preencha este campo`)
            return false;
        }
        else {
            setError(null)
            return true;
        }
    }

    function onChange({ target }) {
        if (error) validate(target.value)
        setValue(target.value);
    }

    function cleanInput() {
        setValue("")
        setError(null)
    }

    return ( {
        value,
        error,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
        cleanInput
    }

    )
}

export default useForm