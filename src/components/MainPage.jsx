import InputIngredients from './InputIngredients'
import IngredientsList from './IngredientsList'
import Recipe from './Recipe'
import GetRecipe from './GetRecipe'
import { getRecipeFromMistral } from '../ai'
import {useState, useEffect, useRef} from 'react'

function MainPage() {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState(false)

    const recipeSection = useRef(null)

    console.log(recipeSection)

    function addIngredients(ingredient) {
        setIngredients(prev => [...prev, ingredient])
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    useEffect(() => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    console.log(ingredients)

    return (
        <div className='main-page'>
            <InputIngredients onAddIngredients={addIngredients}/>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients}/>}
            {ingredients.length >= 4 && <GetRecipe recipeRef={recipeSection} getRecipe={getRecipe} /> }
            {recipe.length > 0 && <Recipe getRecipe={getRecipe} recipe={recipe}/>}
        </div>
    )
}

export default MainPage