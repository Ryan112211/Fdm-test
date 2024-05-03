import type { ApiBuilder, ApiBuilderConfig } from "../interfaces/api-builder"
import { type Ref } from "vue"
import { useDefaultApiStateHandler } from "./api-state-handler"
import { nanoid } from "nanoid"
import { ApiCallComposableMethods } from "../enums/api-methods"
import type { ApiDataState, ApiErrorState, ApiLoadingState } from "../interfaces/api-states"
import {
	ApiDeleteParameters,
	ApiGetParameters,
	ApiPostParameters,
	ApiPutParameters,
	ApiRequestParameters,
	ApiRequestQuery,
} from "../interfaces/api-requests"
import {
	ApiComposableOptions,
	ApiDeleteComposable,
	ApiGetComposable,
	ApiPostComposable,
	ApiPutComposable,
} from "../interfaces/api-composables"
import { AxiosError } from "axios"

const defaultApiStateLoadingHandler = useDefaultApiStateHandler()
const defaultApiStateErrorHandler = useDefaultApiStateHandler()
const defaultApiStateDataHandler = useDefaultApiStateHandler()

export const useApiBuilder = <TData>(config: ApiBuilderConfig): ApiBuilder<TData> => {
	const instance = config.instance
	const baseUrl = config.baseUrl
	// const baseHeaders = config.baseHeaders

	const apiStateLoadingHandler = config.apiStateLoadingHandler ?? defaultApiStateLoadingHandler
	const apiStateErrorHandler = config.apiStateErrorHandler ?? defaultApiStateErrorHandler
	const apiStateDataHandler = config.apiStateDataHandler ?? defaultApiStateDataHandler

	if (!instance) throw `AxiosInstance of ${typeof useApiBuilder.name} is undefined.`

	/**
	 * Creates a query-parameter for a request.
	 * Resulting string will be: {key}={value}
	 * @param query
	 */
	const createSearchParams = (query: ApiRequestQuery | Array<ApiRequestQuery> | string | undefined) => {
		if (!query) return ""
		if (typeof query === "string" && query) return `?${query}`

		const searchParams = new URLSearchParams()

		if (Array.isArray(query)) {
			query.forEach((sp) => searchParams.append(sp.key, sp.value))
		}

		if (typeof query === "object" && !Array.isArray(query)) {
			searchParams.append((query as ApiRequestQuery).key, (query as ApiRequestQuery).value)
		}

		return `?${searchParams.toString()}`
	}

	/**
	 * Creates the final url to be used in requests.
	 * @param paramsUrl
	 * @returns
	 */
	const createRequestUrl = (paramsUrl?: string, requestOptions?: ApiRequestParameters): string => {
		let url = paramsUrl ? `${baseUrl}/${paramsUrl}` : baseUrl

		if (!requestOptions) return url ?? ""

		url += requestOptions.url ? `/${requestOptions.url}` : ""
		url += requestOptions.parameters ? createSearchParams(requestOptions.parameters) : ""

		return url ?? ""
	}

	/**
	 * Creates a shell shared by all composables.
	 * @param config
	 */
	const useRequest = (options: ApiComposableOptions, dataState?: Ref<Array<TData> | TData>) => {
		/**
		 * Create loadingState object before proceeding.
		 */
		const loadingState: ApiLoadingState = {
			stateKey: options.loadingKey ?? nanoid(),
			isLoading: false,
		}

		/**
		 * Create errorState object before proceeding.
		 */
		const errorState: ApiErrorState = {
			stateKey: options.errorKey ?? nanoid(),
			error: { value: undefined },
		}

		/**
		 * Create dataState object before proceeding.
		 */

		const dataWithKey: ApiDataState<any> = {
			stateKey: options.dataKey ?? nanoid(),
			data: dataState?.value ?? undefined,
		}

		/**
		 * Handle the new loadingState in the globalStates
		 */
		const loading: Ref<ApiLoadingState> = apiStateLoadingHandler.addApiState(loadingState) as Ref<ApiLoadingState>

		/**
		 * Handle the new loadingState in the globalStates
		 */
		const error: Ref<ApiErrorState> = apiStateLoadingHandler.addApiState(errorState) as Ref<ApiErrorState>

		const data: Ref<Array<TData> | TData | undefined> = apiStateDataHandler.addApiState(dataWithKey) as Ref<
			Array<TData> | TData | undefined
		>

		return {
			loading,
			data,
			error,
		}
	}

	const useGet = (options: ApiComposableOptions = {}, dataState?: Ref<Array<TData> | TData>): ApiGetComposable<any> => {
		const { loading, data, error } = useRequest(options, dataState)

		const _get = async (params?: ApiGetParameters) => {
			try {
				error.value.error = undefined
				loading.value.isLoading = true
				apiStateLoadingHandler.upsertApiState(loading.value)

				const res = instance[ApiCallComposableMethods.GET](createRequestUrl(options.url, params))
				const resData = (await res).data

				data.value = resData
				return Promise.resolve(data.value)
			} catch (e: AxiosError | any) {
				console.log("i came here", e)
				error.value.error = e

				return Promise.resolve(error.value)
			} finally {
				loading.value.isLoading = false
				apiStateLoadingHandler.upsertApiState(loading.value)
				apiStateErrorHandler.upsertApiState(error.value)
			}
		}

		return {
			loading,
			data,
			error,
			_get,
		}
	}

	const usePost = (
		options: ApiComposableOptions = {},
		dataState?: Ref<Array<TData> | TData>
	): ApiPostComposable<TData> => {
		const { loading, data, error } = useRequest(options, dataState)

		const _post = async (params: ApiPostParameters<TData>) => {
			error.value.error = undefined

			try {
				loading.value.isLoading = true
				apiStateLoadingHandler.upsertApiState(loading.value)

				const res = instance[ApiCallComposableMethods.POST](createRequestUrl(options.url, params), params.body)
				const resData = (await res).data

				data.value = resData
				return Promise.resolve(resData)
			} catch (e: any) {
				error.value.error = e
				return Promise.resolve(error.value.error)
			} finally {
				loading.value.isLoading = false
				apiStateLoadingHandler.upsertApiState(loading.value)
			}
		}

		return {
			loading,
			data,
			error,
			_post,
		}
	}

	const usePut = (
		options: ApiComposableOptions = {},
		dataState?: Ref<Array<TData> | TData>
	): ApiPutComposable<TData> => {
		const { loading, data, error } = useRequest(options, dataState)

		const _put = async (params: ApiPutParameters<TData>) => {
			error.value.error = undefined

			try {
				loading.value.isLoading = true
				apiStateLoadingHandler.upsertApiState(loading.value)

				const res = instance[ApiCallComposableMethods.PUT](
					createRequestUrl(options.url, { ...params, url: `${params.url}/${params.key}` }),
					params.body
				)
				const resData = (await res).data

				data.value = resData
				return Promise.resolve(resData)
			} catch (e: any) {
				error.value.error = e
				return Promise.resolve(error.value.error)
			} finally {
				loading.value.isLoading = false
				apiStateLoadingHandler.upsertApiState(loading.value)
			}
		}

		return {
			loading,
			data,
			error,
			_put,
		}
	}

	const useDelete = (
		options: ApiComposableOptions = {},
		dataState?: Ref<Array<TData> | TData>
	): ApiDeleteComposable<TData> => {
		const { loading, data, error } = useRequest(options, dataState)

		const _delete = async (params: ApiDeleteParameters) => {
			error.value.error = undefined

			try {
				loading.value.isLoading = true
				apiStateLoadingHandler.upsertApiState(loading.value)

				const res = instance[ApiCallComposableMethods.DELETE](
					createRequestUrl(options.url, { ...params, url: `${params.url}/${params.key}` })
				)
				const resData = (await res).data

				data.value = resData
				return Promise.resolve(resData)
			} catch (e: any | AxiosError) {
				error.value.error = e
				return Promise.resolve(error.value.error)
			} finally {
				loading.value.isLoading = false
				apiStateLoadingHandler.upsertApiState(loading.value)
			}
		}

		return {
			loading,
			data,
			error,
			_delete,
		}
	}

	return {
		useGet,
		usePost,
		usePut,
		useDelete,
		apiStateLoadingHandler,
		apiStateErrorHandler,
	}
}
