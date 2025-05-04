<script setup>
import { markRaw, onMounted } from 'vue';
import { App } from '../../api/api';
import Step1 from './login/Step1Login.vue';
import Step2 from './login/Step2Login.vue';
import { useSignInStore } from '../../stores/auth/signIn-store';

const loginStore = useSignInStore()

onMounted(()=>{
    loginStore.step1 = markRaw(Step1)
    loginStore.step2 = markRaw(Step2)
    loginStore.currentStep = loginStore.step1
})

</script>

<template>
    <div class="flex flex-row justify-between mt-40">
        <div></div>
        <div class="w-[300px]">
            <h1 class="mb-3 text-3xl font-semibold">Sign In</h1>
            <keep-alive>
                <component :is="loginStore.currentStep"/>
            </keep-alive>

            <div class="flex">
                <router-link class="font-medium hover:underline" to="/signup">SignUp ?</router-link>
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
