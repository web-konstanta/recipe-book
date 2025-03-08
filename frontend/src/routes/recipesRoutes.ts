import Recipes from "../pages/Recipes"
import { RouteType } from "../types"

export const recipesRoutes: Array<RouteType> = [
	{ path: '/', component: Recipes, exact: true }
]