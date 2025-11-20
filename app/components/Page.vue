<template>
    <div class="relative min-h-screen flex flex-col overflow-hidden">
        <div 
            class="absolute inset-0 bg-cover bg-no-repeat bg-bottom opacity-25" 
            :style="{
                backgroundImage: `url('${background}')`
            }"
        >
        </div>
        <!-- content -->
        <div class="relative z-10 flex flex-col items-center gap-8 py-8 px-6">
            <div v-if="header" class="righteous-font text-4xl text-white text-center">
                {{ header }}
            </div>
            <slot></slot>
        </div>

        <div class="relative z-10 mt-auto">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    header?: string
    background?: string
}>()

// const {
//     header = "Your mission",
//     background = '/img/bg_intro.png'
// } = props
</script>