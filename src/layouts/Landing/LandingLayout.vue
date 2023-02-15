<template>
    <div class="flex flex-col h-screen w-screen overflow-x-hidden">
        <!-- Header Added Relative -->
        <div class="relative flex h-16 bg-amber-500 w-full justify-between items-center px-5">
          <span>insert logo here</span>
          <!-- Hidden when less than sm -->
          <div class="hidden sm:flex gap-5 items-center">
            <router-link :to="{name: 'Login'}">
              <span class="border-amber-800 rounded-xl border-2 p-1.5 select-none cursor-pointer hover:border-none hover:bg-amber-400 hover:font-bold hover:scale-110 transition-all duration-150">Login</span>
            </router-link>
            <router-link :to="{name: 'Register'}">
              <span class="select-none cursor-pointer">Register</span>
            </router-link>
            <router-link :to="{name: 'Login'}">
              <span class="border-amber-800 rounded-xl border-2 p-1.5 select-none cursor-pointer hover:border-none hover:bg-amber-400 hover:font-bold hover:scale-110 transition-all duration-150">Login</span>
            </router-link>
            <router-link :to="{name: 'Register'}">
              <span class="select-none cursor-pointer">Register</span>
            </router-link>
            <router-link :to="{name: 'Login'}">
              <span class="border-amber-800 rounded-xl border-2 p-1.5 select-none cursor-pointer hover:border-none hover:bg-amber-400 hover:font-bold hover:scale-110 transition-all duration-150">Login</span>
            </router-link>
            <router-link :to="{name: 'Register'}">
              <span class="select-none cursor-pointer">Register</span>
            </router-link>
          </div>
          <!-- hidden when greater than sm -->
          <div class="flex sm:hidden gap-5 items-center">
            <!-- added @click added cursor-pointer class -->
            <Icon @click="componentOptions.showMobileNavigation = !componentOptions.showMobileNavigation" icon="charm:menu-hamburger" class="cursor-pointer"></Icon>
            <!-- Created div with top-16 left-0 absolute -->
            <div v-if="componentOptions.showMobileNavigation" class="absolute top-16 left-0 bg-white w-full flex flex-col p-3 gap-3">
              <span>nav item 1</span>
              <span>nav item 1</span>
              <span>nav item 1</span>
              <span>nav item 1</span>
              <span>nav item 1</span>
            </div>
          </div>
        </div>
        <!-- Content -->
        <div class="flex flex-col h-96 mt-12 w-full">
          <!-- text left and icon right division -->
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'LandingLayout',
    setup(){},
    components:{
    },
    // Store all variables for this component here.
    data(){
        return {
            componentOptions: {
              showMobileNavigation: false,
            },
            routes: [
              {
                // corresponds to the route name
                name: 'AboutUs',
                // Alternative name for displaying
                alt: 'About Us'
              },
              {
                // corresponds to the route name
                name: 'Login',
                // Alternative name for displaying
                alt: 'About Us'
              },
              {
                // corresponds to the route name
                name: 'Home',
                // Alternative name for displaying
                alt: 'Home'
              },
              {
                // corresponds to the route name
                name: 'Faq',
                // Alternative name for displaying
                alt: 'FAQ'
              },
            ]
        }
    }
})
</script>