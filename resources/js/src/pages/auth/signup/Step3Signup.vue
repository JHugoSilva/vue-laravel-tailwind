

<script setup>
import { onMounted } from 'vue';
import { useSignUpStore } from '../../../stores/auth/signUp-store';

const registerStore = useSignUpStore()


onMounted(()=>{
    console.log('Step-3');

})
</script>

<template>
     <input type="text" placeholder="Enter You Code"
            class="mb-2 border rounded-md py-2 px-2 w-[100%]"
            />
            <div class="flex justify-between">
                <button @click="registerStore.moveStep2" class="mb-2 border border-indigo-700 text-gray-500 py-2 px-2 rounded-md shadow-sm w-[48%] cursor-pointer">Previous</button>
                <button class="mb-2 bg-indigo-700 text-white py-2 px-2 rounded-md shadow-sm w-[48%] cursor-pointer">Sign In</button>
            </div>
</template>
