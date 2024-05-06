<template>
	<div
		class="w-full max-w-sm p-4 m-4 h-[800px] bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
	>
		<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{{ title }}</h5>
		<div class="flex items-baseline text-gray-900 dark:text-white">
			<span class="text-3xl font-semibold">$</span>
			<span class="text-5xl font-extrabold tracking-tight">{{ price }}</span>
			<span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
		</div>
		<ul role="list" class="space-y-5 my-7">
			<li class="flex items-center">
				<svg
					class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
					/>
				</svg>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
			</li>
			<li class="flex">
				<svg
					class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
					/>
				</svg>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
					>20GB Cloud storage</span
				>
			</li>
			<li class="flex">
				<svg
					class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
					/>
				</svg>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
			</li>
			<li class="flex line-through decoration-gray-500">
				<svg
					class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
					/>
				</svg>
				<span class="text-base font-normal leading-tight text-gray-500 ms-3">Sketch Files</span>
			</li>
			<li class="flex line-through decoration-gray-500">
				<svg
					class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
					/>
				</svg>
				<span class="text-base font-normal leading-tight text-gray-500 ms-3">API Access</span>
			</li>
			<li class="flex line-through decoration-gray-500">
				<svg
					class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
					/>
				</svg>
				<span class="text-base font-normal leading-tight text-gray-500 ms-3">Complete documentation</span>
			</li>
			<li class="flex line-through decoration-gray-500">
				<svg
					class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
					/>
				</svg>
				<span class="text-base font-normal leading-tight text-gray-500 ms-3">24×7 phone & email support</span>
			</li>
		</ul>
		<button
			@click="handleClick"
			type="button"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
		>
			Choose plan
		</button>
		<input
			v-model="inputValue"
			type="text"
			class="mt-4 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
			placeholder="Enter value"
		/>
		<button
			@click="handlePost"
			type="button"
			class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
		>
			Submit
		</button>

		<div class="mt-4 text-lg font-bold text-red-500" v-show="errorMessage">ApiError: {{ errorMessage }}</div>

		<div class="mt-4 text-lg font-bold text-white dark:text-white-400" v-if="lastName && !errorMessage">
			ApiData: {{ lastName }}
		</div>

		<div class="mt-4 text-sm flex justify-center text-white dark:text-white-400" v-show="isLoading">
			<div role="status">
				<svg
					aria-hidden="true"
					class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
					viewBox="0 0 100 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
						fill="currentColor"
					/>
					<path
						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
						fill="currentFill"
					/>
				</svg>

				<span class="sr-only">Loading...</span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { computed, defineProps, onMounted, watch } from "vue"
import { ref } from "vue"
import { useCardStore } from "../../stores/useCardStoreUpdated"
import { useRoute } from "vue-router"

const props = defineProps({
	title: String,

	price: String,
	features: String,
	storage: String,
	users: String,
	projects: String,
	actions: String,
	data: Object,
	loading: Boolean,
	loadingKey: String,
	errorKey: String,
	jokeId: String,
	urlId: String,
})

const cardStore = useCardStore()
const route = useRoute()
const inputValue = ref("")
const {
	data,
	error,
	loading,

	_get: getData,
} = cardStore.useFetchCards({
	errorKey: props.errorKey,
	loadingKey: props.loadingKey,
	dataKey: "data",
})

const { _post: postData } = cardStore.useCreateCard({
	errorKey: props.errorKey,
	loadingKey: props.loadingKey,
})

const isLoading = computed(() => loading.value.isLoading)
const errorMessage = computed(() => error.value.error?.message)
const dataLength = computed(() => data.value?.length)
const lastName = computed(() => data.value?.[dataLength.value - 1]?.name)

const getApiData = async () => {
	await getData({ url: props?.urlId || "", parameters: { key: "name", value: `${route.query.search || ""}` } })
}

const postApiData = async () => {
	await postData({
		body: {
			name: inputValue.value,
		},
	}).then(async () => {
		await getApiData()
	})
}
onMounted(async () => {
	await getApiData()
})

watch(
	() => route.query,
	async () => {
		await getApiData()
	}
)
const handleClick = async () => {
	await getApiData()
}
const handlePost = async () => {
	await postApiData()
}
</script>
