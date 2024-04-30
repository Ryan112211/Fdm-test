export interface ApiRequestQuery {

    /**
     * The key of the parameter.
     */
    key: string;
    /**
     * The value to match the parameter.
     */
    value: string;

}

export interface ApiRequestParameters {

    /**
     * Futher specify the endpoint for the request.
     */
    url?: string

    /**
     * Futher specify the endpoints, by addind query-parameters to the request.
     */
    parameters?: ApiRequestQuery | Array<ApiRequestQuery> | string;

}

export interface ApiGetParameters extends ApiRequestParameters { }

export interface ApiPostParameters<T> extends ApiRequestParameters {
    /**
     * Body of the post-request.
     */
    body: T
}

export interface ApiPutParameters<T> extends ApiRequestParameters {
    /**
     * Key of the object to update.
     * The resulting url will be {axiosInstance.baseUrl}/{apiBuilder.baseUrl}/{apiPut.url}/{key}
     */
    key: string
    /**
     * Body of the put-request.
     */
    body: T
}

export interface ApiDeleteParameters extends ApiRequestParameters {
    /**
     * Key of the object to delete.
     * The resulting url will be {axiosInstance.baseUrl}/{apiBuilder.baseUrl}/{apiPut.url}/{key}
     */
    key: string
}