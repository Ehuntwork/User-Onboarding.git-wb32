import React from 'react';

function Form(props){
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
    } = props

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>This is a form!</h2>

                <label>Name&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label>Email&nbsp;
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>

                <label>Password&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                    />
                </label>

                <label>Agree to Terms of Service
                    <input
                        name='terms of service'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.terms}
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;