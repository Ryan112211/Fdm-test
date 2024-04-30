import { type Ref } from "vue"
import { type ApiState } from "./api-states";

export interface ApiStateHandler<T extends ApiState> {

    /**
     * Array containing all apiStates
     */
    apiStates: Ref<Array<Ref<T>>>;
    /**
     * Retrieve an api state by key.
     * @param key Key of ApiState
     */
    getApiState(key: string): Ref<T> | undefined;
    /**
     * Adds an api state to the handler.
     * @returns Added state.
     * @param state 
     */
    addApiState(state: T): Ref<T>;
    /**
     * Inserts an api state into the handler, if it already exists, it gets updated instead.
     * @returns Upserted state.
     * @param state
     */
    upsertApiState(state: T): Ref<T>;
    /**
     * Remove an api state from the handler by key of the object.
     * @param state 
     */
    removeApiState(state: T): void

}