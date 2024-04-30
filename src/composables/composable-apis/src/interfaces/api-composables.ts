import type { Ref } from "vue"
import type { ApiLoadingState, ApiErrorState } from "./api-states"
import { ApiGetParameters, ApiPostParameters, ApiPutParameters, ApiDeleteParameters } from "./api-requests"

interface ApiComposable<TData> {
	/**
	 * State-object containing LoadingState.
	 */
	loading: Ref<ApiLoadingState>
	/**
	 * State-object containing the ErrorState.
	 */
	error: Ref<ApiErrorState>
	/**
	 * State-object that contains the results from the request.
	 */
	data: Ref<Array<TData> | TData | undefined>
}

export interface ApiComposableOptions {
	/**
	 * Further append an url to the request.
	 */
	url?: string

	/**
	 * Manually set a key for a loadingState. If no key is provided, the key
	 * will be randomized and available in the IApiComposable<T>.loading{ILoadingState}-object.
	 */
	loadingKey?: string

	/**
	 * Manually set a key for a errorState. If no key is provided, the key
	 * will be randomized and available in the IApiComposable<T>.error{ILoadingState}-object.
	 */
	errorKey?: string

	dataKey?: string
}

export interface ApiGetComposable<TData> extends ApiComposable<TData> {
	/**
	 * Perform the get-request.
	 * @param params
	 */
	_get(params?: ApiGetParameters): Promise<Array<TData> | TData | undefined>
}

export interface ApiPostComposable<TData> extends ApiComposable<TData> {
	/**
	 * Perform the post-request.
	 * @param params
	 */
	_post(params: ApiPostParameters<TData>): Promise<TData | TData | undefined>
}

export interface ApiPutComposable<TData> extends ApiComposable<TData> {
	/**
	 * Perform the put-request
	 * @param params
	 */
	_put(params: ApiPutParameters<TData>): Promise<TData | undefined>
}

export interface ApiDeleteComposable<TData> extends ApiComposable<TData> {
	/**
	 * Perform the delete-request.
	 * @param params
	 */
	_delete(params: ApiDeleteParameters): Promise<TData | undefined>
}
