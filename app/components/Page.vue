<template>
    <div class="relative min-h-screen flex flex-col overflow-hidden text-white">
        <div v-if="background" 
            class="absolute inset-0 bg-cover bg-no-repeat bg-bottom opacity-70" 
            :style="{
                backgroundImage: `url('${background}')`
            }"
        >
        </div>
        <!-- content -->
        <div class="relative z-20 flex flex-col items-center gap-8 py-8 px-6">
            <div v-if="title" class="righteous-font text-4xl text-white text-center">
                {{ title }}
            </div>
            <slot></slot>
        </div>

        <div class="flex flex-col mt-auto z-10">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    title?: string
    background?: string
}>()

// const {
//     title = "Your mission",
//     background = '/img/bg_intro.png'
// } = props
</script>