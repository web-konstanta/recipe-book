import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService {
	private readonly apiUrl = process.env.API_URL!

	constructor(private readonly httpService: HttpService) { }

	async getAvailableRecipes(search?: string, ingredient?: string, country?: string, category?: string) {
		let url = `${this.apiUrl}/search.php`;

		if (search) {
			url = `${this.apiUrl}/search.php?s=${search}`
		} else if (ingredient) {
			url = `${this.apiUrl}/filter.php?i=${ingredient}`;
		} else if (country) {
			url = `${this.apiUrl}/filter.php?a=${country}`;
		} else if (category) {
			url = `${this.apiUrl}/filter.php?c=${category}`;
		}

		const response = await this.httpService.get(url).toPromise();
		return response?.data;
	}

	async getRecipeById(id: string) {
		const url = `${this.apiUrl}/lookup.php?i=${id}`;
		const response = await this.httpService.get(url).toPromise();
		return response?.data?.meals?.[0];
	}
}
