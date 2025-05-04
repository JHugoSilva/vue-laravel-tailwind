<script setup>
import { markRaw, onMounted } from 'vue';
import { App } from '../../api/api';
import Step1 from './signup/Step1Signup.vue';
import Step2 from './signup/Step2Signup.vue';
import Step3 from './signup/Step3Signup.vue';
import { useSignUpStore } from '../../stores/auth/signUp-store';

const registerStore = useSignUpStore()

onMounted(()=>{
    registerStore.step1 = markRaw(Step1)
    registerStore.step2 = markRaw(Step2)
    registerStore.step3 = markRaw(Step3)
    registerStore.currentStep = registerStore.step1
})

</script>

<template>
    <div class="flex flex-row justify-between mt-40">
        <div></div>
        <div class="w-[300px]">
            <h1 class="mb-3 text-3xl font-semibold">Sign Up</h1>
            <keep-alive>
                <component :is="registerStore.currentStep"/>
            </keep-alive>

            <div class="flex">
                <router-link class="font-medium hover:underline" to="/login">SignIn ?</router-link>
            </div>

            <div class="flex mb-2">
                <hr class="bg-black mt-3 mr-2 h-[1px] w-[48%]"/>
                <div>Or</div>
                <hr class="bg-black mt-3 ml-2 h-[1px] w-[48%]"/>
            </div>

            <button class="flex justify-center bg-gray-300 rounded-md py-2 px-2 gap-2 w-[100%] cursor-pointer">
                <img :src="App.baseUrl+'/img/google.svg'" alt="">
                Continue with Google</button>
        </div>
        <div></div>
    </div>
</template>
