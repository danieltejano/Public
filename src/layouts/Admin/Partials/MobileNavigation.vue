<template>
    <div>
        <div class="flex h-12 items-center justify-between p-5 sm:hidden">
            <div class="flex items-center gap-2 font-semibold">
              <span class="text-2xl">FoX </span>
              <span>|</span>
              <span>LMS</span>
            </div>
            <svg @click="componentOptions.showMobileNav = !componentOptions.showMobileNav" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" /></svg>
        </div>
        <div v-if="componentOptions.showMobileNav" class="fixed top-14 flex w-full flex-col gap-5 bg-white px-5 font-bold sm:hidden">
            <span>navItem 1</span>
            <span>navItem 1</span>
            <span>navItem 1</span>
            <span>navItem 1</span>
            <span>navItem 1</span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MobileNavigation',
    setup(){},
    data(){
        return{
            componentOptions: {}
        }
    }
})
</script>