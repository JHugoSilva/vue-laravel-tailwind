import { acceptHMRUpdate, defineStore } from "pinia";
import { shallowRef } from "vue";


export const useSignInStore = defineStore('signIn', () => {

    const currentStep = shallowRef(null)

    const step1 = shallowRef(null)
    const step2 = shallowRef(null)

    function next() {
        currentStep.value = step2.value
    }

    function previous() {
        currentStep.value = step1.value
    }

    return {
        step1,
        step2,
        currentStep,
        next,
        previous
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSignInStore, import.meta.hot))
}

