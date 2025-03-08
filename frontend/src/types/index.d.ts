export type RouteType = {
	path: string,
	component: ComponentType,
	exact: boolean
}

export type Recipe = {
	idMeal: string
	strMealThumb: string
	strMeal: string
	strArea: string
	strInstructions: string
	strCategory: string
}