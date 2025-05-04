<script setup>
import { ref } from 'vue';
import { App } from '../../../api/api';

const toggleSideBar = ref(false)
const topNavBarMenu = ref(false)

function toggleTopNavBar() {
    topNavBarMenu.value=!topNavBarMenu.value
}

function toggle() {
    toggleSideBar.value=!toggleSideBar.value
}



</script>
<template>
    <div class="h-screen flex flex-1">
            <nav :class="`h-full bg-slate-50 ${toggleSideBar ? '[w-210px]':''}`">
                <div class="flex justify-between p-3">
                    <img v-show="toggleSideBar" :src="App.baseUrl+'/img/logo.png'" alt="" class="w-10"/>
                    <button v-if="toggleSideBar" @click="toggle" class="hover:bg-slate-200 px-3 py-3 rounded-4xl cursor-pointer">
                        <ChevronIconLeft/>
                    </button>
                    <button v-else @click="toggle" class="hover:bg-slate-200 px-3 py-3 rounded-4xl cursor-pointer">
                        <ChevronIconRight/>
                    </button>
                </div>
                <ul class="flex flex-col p-2 gap-2">
                    <hr>
                    <li class="flex items-center hover:bg-slate-200 cursor-pointer gap-3 px-2 py-2 rounded-md">
                        <HomeIcon />
                        <span v-show="toggleSideBar">
                            Home
                        </span>
                    </li>
                    <li class="flex items-center hover:bg-slate-200 cursor-pointer gap-3 px-2 py-2 rounded-md">
                        <PaymentIcon />
                        <span v-show="toggleSideBar">
                            Payment
                        </span>
                    </li>
                    <hr>
                    <li class="flex items-center text-red-600  hover:bg-slate-200 cursor-pointer gap-3 px-2 py-2 rounded-md">
                        <LogoutIcon />
                        <span v-show="toggleSideBar">
                            Logout
                        </span>
                    </li>
                </ul>
            </nav>

            <!-- start main -->
             <div class="bg-slate-200 w-full">
                <div class="flex justify-between">
                    <div></div>
                    <div class="py-3 px-3">
                        <img @click="toggleTopNavBar" :src="App.baseUrl+'/img/avatar.webp'" class="border-2 hover:border-white rounded-full w-10 h-10 cursor-pointer" alt="logo">
                        <ul v-show="topNavBarMenu" class="bg-white w-[250px] absolute right-4 py-3 px-3 rounded-md shadow-lg divide-y divide-gray-200">
                            <li class="py-2 px-2">
                                Ben
                                <br>
                                <a class="text-indigo-700" href="">h@email.com</a>
                            </li>
                            <li class="py-2 px-2 hover:bg-gray-100  cursor-pointer rounded-md text-red-600 font-semibold">
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex p-10">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in ipsa odio perspiciatis, quibusdam porro ipsum eos iste error at voluptatem quidem dolores fugit distinctio! In, labore voluptatem? Atque, sint.
                    </p>
                </div>
             </div>
            <!-- end main -->
    </div>
</template>
