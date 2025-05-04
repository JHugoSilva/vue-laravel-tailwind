import { acceptHMRUpdate, defineStore } from "pinia";
import { shallowRef } from "vue";


export const useSignUpStore = defineStore('signUp', () => {

    const currentStep = shallowRef(null)

    const step1 = shallowRef(null)
    const step2 = shallowRef(null)
    const step3 = shallowRef(null)

    function moveStep1() {
        currentStep.value = step1.value
    }

    function moveStep2() {
        currentStep.value = step2.value
    }


    function moveStep3() {
        currentStep.value = step3.value
    }

    return {
        step1,
        step2,
        step3,
        currentStep,
        moveStep1,
        moveStep2,
        moveStep3
    }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSignUpStore, import.meta.hot))
}
