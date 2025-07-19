import {useState} from 'react'

function InputIngredients({onAddIngredients}) {



    function addNewIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        if (newIngredient.length > 0) onAddIngredients(newIngredient)
    }

    return (
        <form action={addNewIngredient} className='input-form'>
            <input type='text' name='ingredient' placeholder='e.g. oregano' ></input>
            <button >+ Add ingredient</button>
        </form>
    )
}

export default InputIngredients