<template>
    <div class="p-5">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Page',
    setup(){},
    data(){
        return{
            componentOptions: {}
        }
    }
})
</script>