function GetRecipe(props) {
    return (
        <div className='get-recipe' ref={props.recipeRef}>
            <div className='get-recipe-text-container'>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe for your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
    )
}

export default GetRecipe