import { ref, type Ref } from 'vue'
import type { ApiState } from '../interfaces/api-states'
import type { ApiStateHandler } from '../interfaces/api-state-handler'

/**
 * Composable that returns the functions for handling states.
 * @returns
 */
export const useDefaultApiStateHandler = <T extends ApiState>(): ApiStateHandler<T> => {
  const globalStates: Ref<Array<Ref<T>>> = ref([])

  const getGlobalApiState = (key: string) => {
    const loadingState = globalStates.value.find((state) => state.value.stateKey === key)
    return loadingState ?? undefined
  }

  const addGlobalApiState = (state: T) => {
    const exists = getGlobalApiState(state.stateKey)

    if (!exists) {
      const updatedLoadingStates = [...globalStates.value]
      updatedLoadingStates.push(ref(state) as Ref<T>)
      globalStates.value = updatedLoadingStates
    }

    return getGlobalApiState(state.stateKey)!
  }

  const upsertGlobalApiState = (state: T) => {
    //If exists.
    if (getGlobalApiState(state.stateKey)) {
      removeGlobalApiState(state)
    }

    addGlobalApiState(state)
    return getGlobalApiState(state.stateKey)!
  }

  const removeGlobalApiState = (state: T) => {
    const currentLoadingStates = [...globalStates.value]
    const filteredLoadingStates = currentLoadingStates.filter(
      (local) => state.stateKey !== local.value.stateKey,
    )

    globalStates.value = filteredLoadingStates
  }

  return {
    apiStates: globalStates,
    getApiState: getGlobalApiState,
    addApiState: addGlobalApiState,
    upsertApiState: upsertGlobalApiState,
    removeApiState: removeGlobalApiState,
  }
}

/**
 * Provides a default apiStateHandler with the type ApiState.
 */
export const defaultApiStateHandler = () => useDefaultApiStateHandler<ApiState>()
