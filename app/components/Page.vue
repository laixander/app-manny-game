<template>
    <div class="relative min-h-screen flex flex-col overflow-hidden text-white">

        <!-- BACKGROUND IMAGE -->
        <slot name="background">
            <div 
                v-if="background?.src" 
                class="absolute w-full bg-no-repeat bg-top page-background-transition"
                :class="{
                    'bg-cover': background.size === 'cover',
                    'bg-contain': background.size === 'contain',
                    'bg-size-[auto_calc(100vh-25%)]': background.size === 'half',
                }"
                :style="{
                    height: background.height ? background.height : '100%',
                    backgroundImage: `url('${background.src}')`,
                    opacity: background.opacity ?? 0.7
                }"
            ></div>
        </slot>



        <!-- OPTIONAL BACKGROUND BLUR -->
        <div
            v-if="background?.blur"
            class="absolute inset-0 pointer-events-none"
            :style="{
                backdropFilter: `blur(${background.blur}px)`
            }"
        ></div>

        <!-- OPTIONAL GRADIENT OVERLAY -->
        <div 
            v-if="background?.overlay" 
            class="absolute w-full h-82 bg-linear-to-b from-[#092C59]/90 to-transparent"
        ></div>

        <!-- CONTENT -->
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
    background?: {
        src: string
        size?: string
        opacity?: number
        overlay?: boolean
        blur?: number
        height?: string | number   // <-- ADD THIS
    }
}>()
</script>

<style scoped>
.page-background-transition {
    transition: 
        opacity 0.5s ease,
        filter 0.5s ease,
        height 0.5s ease;
}
</style>