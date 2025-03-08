import Index from "../pages/Index"
import Show from "../pages/Show"
import { RouteType } from "../types"

export const recipesRoutes: Array<RouteType> = [
	{ path: '/', component: Index, exact: true },
	{ path: '/recipe/:id', component: Show, exact: true }
]