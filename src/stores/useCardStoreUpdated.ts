import jsonServerAxios from "@/api/axiosClient"
import { useApiBuilder } from "@/composables/composable-apis-updated"
import { defineStore } from "pinia"

export const useCardStore = defineStore("cardupdated", () => {
	const { useGet, usePost, usePut, useDelete } = useApiBuilder<any>({
		baseUrl: "",
		instance: jsonServerAxios,
	})

	const useFetchCards = useGet
	const useCreateCard = usePost
	const usePutCard = usePut
	const useDeleteCard = useDelete

	return {
		useFetchCards,
		useCreateCard,
		usePutCard,
		useDeleteCard,
	}
})
