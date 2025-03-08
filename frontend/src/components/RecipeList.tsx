import { useEffect, useState } from 'react'
import RecipeService from '../services/RecipeService'
import { Link, useSearchParams } from 'react-router-dom'
import { Recipe } from '../types'

const RecipesList = () => {
    const [searchParams] = useSearchParams()
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchRecipes = async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await RecipeService.getAllRecipes(searchParams)
            setRecipes(data?.meals ?? [])
        } catch (err) {
            setError('Failed to fetch recipes.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRecipes()
    }, [searchParams])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
                        <div
                            style={{
                                border: '1px solid red',
                                padding: '25px',
                                cursor: 'pointer',
                            }}
                        >
                            <div>
                                <img
                                    src={recipe.strMealThumb}
                                    width={100}
                                    height={100}
                                    alt={recipe.strMeal}
                                />
                            </div>
                            <div>{recipe.strMeal}</div>
                        </div>
                    </Link>
                ))
            ) : (
                <h1>No recipes found</h1>
            )}
        </div>
    )
}

export default RecipesList
