

<script setup>
import { onMounted } from 'vue';
import { useSignUpStore } from '../../../stores/auth/signUp-store';

const registerStore = useSignUpStore()


onMounted(()=>{
    console.log('Step-2');

})
</script>

<template>
     <input type="text" placeholder="Enter Password"
            class="mb-2 border rounded-md py-2 px-2 w-[100%]"
            />
            <div class="flex justify-between">
                <button @click="registerStore.moveStep1" class="mb-2 border border-indigo-700 text-gray-500 py-2 px-2 rounded-md shadow-sm w-[48%] cursor-pointer">Previous</button>
                <button @click="registerStore.moveStep3" class="mb-2 bg-indigo-700 text-white py-2 px-2 rounded-md shadow-sm w-[48%] cursor-pointer">Next</button>
            </div>
</template>
