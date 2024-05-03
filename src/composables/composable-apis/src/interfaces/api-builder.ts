import type { AxiosHeaders, AxiosInstance } from "axios";
import type { Ref } from "vue";
import type { ApiStateHandler } from "./api-state-handler";
import { ApiComposableOptions, ApiGetComposable, ApiPostComposable, ApiPutComposable, ApiDeleteComposable } from "./api-composables";
import { ApiState } from "./api-states";

export interface ApiBuilderConfig {

    /**
     * AxiosInstance to use in requests of this type.
     */
    instance: AxiosInstance
    /**
     * Additional baseUrl to apply to all requests.
     */
    baseUrl?: string
    /**
     * Additional headers to apply to all requests.
     */
    baseHeaders?: AxiosHeaders
    /**
     * Use a custom or predefined apiStateHandler for all requests in the loading-state.
     */
    apiStateLoadingHandler?: ApiStateHandler<ApiState>
    /**
     * Use a custom or predefined apiStateHandler for all requests in the error-state.
     */
    apiStateErrorHandler?: ApiStateHandler<ApiState>

}

export interface ApiBuilder<TData> {

    /**
     * Build a get-request composable, containing the anatomy of the request.
     * @param options 
     * @param dataState - To be implemented
     */
    useGet(options?: ApiComposableOptions, dataState?: Ref<Array<TData> | TData>): ApiGetComposable<TData>;
    /**
     * Build a post-request composable, containing the anatomy of the request.
     * @param options 
     * @param dataState - To be implemented
     */
    usePost(options?: ApiComposableOptions, dataState?: Ref<Array<TData> | TData>): ApiPostComposable<TData>;
    /**
     * Build a put-request composable, containing the anatomy of the request.
     * @param options 
     * @param dataState - To be implemented
     */
    usePut(options?: ApiComposableOptions, dataState?: Ref<Array<TData> | TData>): ApiPutComposable<TData>;
    /**
     * Build a delete-request composable, containing the anatomy of the request.
     * @param config 
     * @param dataState - To be implemented
     */
    useDelete(options?: ApiComposableOptions, dataState?: Ref<Array<TData> | TData>): ApiDeleteComposable<TData>;

    /**
     * Use a custom or predefined apiStateHandler for all requests in the loading-state.
     */
    apiStateLoadingHandler: ApiStateHandler<ApiState>
    /**
     * Use a custom or predefined apiStateHandler for all requests in the error-state.
     */
    apiStateErrorHandler: ApiStateHandler<ApiState>

}
