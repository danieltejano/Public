<template>
    <div class="flex h-screen w-screen">
        <div class="flex items-center h-full w-full bg-amber-600 p-5 text-slate-800">
            <div class="flex flex-col">
                <span class="text-2xl font-semibold">Welcome to</span>
                <span class="text-7xl font-bold">FoX LMS</span>
            </div>
        </div>
        <div class="flex items-center h-full w-full p-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AuthLayout',
    setup(){},
    data(){
        return{
            componentOptions: {}
        }
    }
})
</script>