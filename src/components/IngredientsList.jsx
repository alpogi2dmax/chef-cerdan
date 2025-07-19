function IngredientsList(props) {
    return (
        <div className='ingredients-list'>
            <h2>Ingredients on hand:</h2>
            <ul>
                {props.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default IngredientsList