class RecipeService {
	private async fetchData(url: string): Promise<any> {
		try {
			const apiUrl = import.meta.env.VITE_API_URL;
			const response = await fetch(`${apiUrl}${url}`);
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			return await response.json();
		} catch (e) {
			console.error(e);
			throw e;
		}
	}

	async getAllRecipes(searchParams: URLSearchParams): Promise<any> {
		let apiUrl = '/recipes/available'

		const search = searchParams.get('search')
		const ingredient = searchParams.get('ingredient')
		const country = searchParams.get('country')
		const category = searchParams.get('category')

		if (search) {
			apiUrl += `?search=${search}`
		} else if (ingredient) {
			apiUrl += `?ingredient=${ingredient}`
		} else if (country) {
			apiUrl += `?country=${country}`
		} else if (category) {
			apiUrl += `?category=${category}`
		}


		return this.fetchData(apiUrl);
	}

	async getRecipeInfo(id: number): Promise<any> {
		return this.fetchData(`/recipes/${id}`);
	}
}

export default new RecipeService();