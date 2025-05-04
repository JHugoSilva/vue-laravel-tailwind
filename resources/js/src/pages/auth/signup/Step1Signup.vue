
<script setup>
import { onMounted } from 'vue';
import { useSignUpStore } from '../../../stores/auth/signUp-store';

const registerStore = useSignUpStore()

onMounted(()=>{
    console.log('Step-1');

})
</script>

<template>
     <input type="text" placeholder="Enter E-mail"
            class="mb-2 border rounded-md py-2 px-2 w-[100%]"
            />
            <button @click="registerStore.moveStep2" class="mb-2 bg-indigo-700 text-white py-2 px-2 rounded-md shadow-sm w-[100%] cursor-pointer">Next</button>
</template>
