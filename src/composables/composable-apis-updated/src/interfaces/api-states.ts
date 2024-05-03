export interface ApiState {
	/**
	 * Key used to keep track of the ApiState.
	 */
	stateKey: string
}

export interface ApiLoadingState extends ApiState {
	/**
	 * Boolean to indicate that request is executing.
	 */
	isLoading: boolean
}

export interface ApiErrorState extends ApiState {
	/**
	 * Object that contains the error that the request can produce.
	 */
	error: any
}

export interface ApiDataState<TData> extends ApiState {
	/**
	 * Data that the request can produce.
	 */
	data: TData
}
