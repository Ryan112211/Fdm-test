import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import Legacy from "../views/legacy/Legacy.vue"
import Updated from "../views/updated/Updated.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Legacy",
		component: Legacy,
	},
	{
		path: "/updated",
		name: "Updated",
		component: Updated,
	},
	// {
	// 	path: "/:pathMatch(.*)*",
	// 	name: "NotFound",
	// 	component: () => import("../views/NotFound.vue"),
	// },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
