import { useEffect, useState } from 'react'
import RecipeService from '../services/RecipeService'
import { useParams } from 'react-router-dom'
import { getIngredients } from '../utils/recipe'
import { Link } from 'react-router-dom'
import { Recipe } from '../types'

const RecipeInfo = () => {
    const [recipeInfo, setRecipeInfo] = useState<Recipe | null>(null)
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams<{ id: string }>()

    const fetchRecipeInfo = async () => {
        if (!id) return
        setLoading(true)
        setError(null)
        try {
            const data = await RecipeService.getRecipeInfo(Number(id))
            setRecipeInfo(data)
        } catch (err) {
            setError('Failed to fetch recipe details')
        } finally {
            setLoading(false)
        }
    }

    const fetchRecipes = async (category: string) => {
        setLoading(true)
        setError(null)
        try {
            const params = new URLSearchParams()
            if (category) {
                params.append('category', category)
            }

            const data = await RecipeService.getAllRecipes(params)
            setRecipes(data?.meals ?? [])
        } catch (err) {
            setError('Failed to fetch recipes.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRecipeInfo()
    }, [id])

    useEffect(() => {
        if (recipeInfo?.strCategory) {
            fetchRecipes(recipeInfo.strCategory)
        }
    }, [recipeInfo])

    const ingredients = recipeInfo ? getIngredients(recipeInfo) : []

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!recipeInfo) {
        return <div>Recipe not found</div>
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <img
                        src={recipeInfo.strMealThumb}
                        width={200}
                        height={200}
                        alt={recipeInfo.strMeal}
                    />
                </div>
                <div>
                    <h2>{recipeInfo.strMeal}</h2>
                    <Link to={`/?country=${recipeInfo.strArea}`}>
                        {recipeInfo.strArea}
                    </Link>
                    <div>{recipeInfo.strInstructions}</div>
                </div>
                <div>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <Link to={`/?ingredients=${ingredient}`}>
                                    {ingredient}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <h3>Other recipes in the same category:</h3>
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <Link
                            key={recipe.strMeal}
                            to={`/?category=${recipeInfo?.strCategory}`}
                        >
                            <div
                                style={{
                                    padding: '20px',
                                    border: '1px solid #ddd',
                                }}
                            >
                                <img
                                    src={recipe.strMealThumb}
                                    width={100}
                                    height={100}
                                    alt={recipe.strMeal}
                                />
                                <h4>{recipe.strMeal}</h4>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No other recipes found</p>
                )}
            </div>
        </div>
    )
}

export default RecipeInfo
