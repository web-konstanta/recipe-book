export const getIngredients = (item: any): Array<string> => {
	const ingredients = []

	for (let i = 1; i <= 20; i++) {
		const ingredient = item[`strIngredient${i}`]
		if (ingredient && ingredient.trim() !== '') {
			ingredients.push(ingredient)
		}
	}

	return ingredients
}