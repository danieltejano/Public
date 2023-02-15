<template>
    <div class="flex h-screen w-screen overflow-hidden">
        <!-- Navbar -->
        <MainNavigation :routes="routes"/>
        <!-- Content -->
        <div class="flex h-full w-full flex-col">
          <!-- Mobile Nav -->
          <MobileNavigation/>
          <!-- Header -->
          <Header/>
          <!-- Content -->
          <div>
            <router-view></router-view>
          </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import MainNavigation from './Partials/MainNavigation.vue';
import MobileNavigation from './Partials/MobileNavigation.vue'
import Header from './Partials/Header.vue'

export default defineComponent({
    name: 'Admin',
    setup(){},
    components:{
      MainNavigation,
      MobileNavigation,
      Header,
    },
    // Store all variables for this component here.
    data(){
        return {
            componentOptions: {
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