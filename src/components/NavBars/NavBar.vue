<template>
	<header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
		<!-- logo -->
		<h1 class="w-3/12">
			<a class="text-2xl font-semibold text-green-500 hover:text-green-600" href="/">FDM Test</a>
		</h1>

		<!-- navigation -->
		<nav class="nav font-semibold text-lg">
			<ul class="flex items-center">
				<li
					class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
				>
					<router-link to="/">Legacy</router-link>
				</li>
				<li
					class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
				>
					<router-link to="/updated">Proposed Enhancements</router-link>
				</li>
			</ul>
		</nav>

		<!-- buttons --->
		<div class="w-3/12 flex justify-end">
			<div class="container mx-auto px-4">
				<input
					type="search"
					class="border border-green-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
					placeholder="Search..."
					v-model="searched"
					@keydown.enter="onSearch"
				/>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { ref, watch } from "vue"

const router = useRouter()
const searched = ref("")
const onSearch = () => {
	router.push({ query: { search: searched.value } })
}

watch(
	[searched],
	() => {
		// push when search becomes empty
		if (!searched.value) {
			router.push({ query: { search: null } })
		}
	},
	{ immediate: true }
)
</script>

<style>
.router-link-active {
	border-color: #22c55e;
	color: #22c55e;
}
</style>
