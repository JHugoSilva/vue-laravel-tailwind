
<script setup>
import { onMounted } from 'vue';
import { useSignInStore } from '../../../stores/auth/signIn-store';

const loginStore = useSignInStore()


onMounted(()=>{
    console.log('Step-2');

})
</script>

<template>
     <input type="text" placeholder="Enter Password"
            class="mb-2 border rounded-md py-2 px-2 w-[100%]"
            />
            <div class="flex justify-between">
                <button @click="loginStore.previous" class="mb-2 border border-indigo-700 text-gray-500 py-2 px-2 rounded-md shadow-sm w-[48%] cursor-pointer">Previous</button>
                <button class="mb-2 bg-indigo-700 text-white py-2 px-2 rounded-md shadow-sm w-[48%] cursor-pointer">Sign In</button>
            </div>
</template>
