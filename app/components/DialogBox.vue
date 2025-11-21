<template>    
    <div class="relative flex flex-col">
        <NuxtImg :src="'img/' + character + '.png'" class="ml-auto w-50" />
        <div class="absolute bottom-0 flex flex-col p-6 min-h-50 border-t-4 border-[#FFA828] bg-black/20 backdrop-blur-2xl">
            <!-- Speaker Label -->
            <div class="absolute -top-9 left-0 righteous-font text-[#FFA828]
                 bg-[#FFA828]/20 px-3 py-1 rounded-tr-md inline-block">
                {{ speaker }}
            </div>
            <!-- Message Body -->
            <div class="roboto-mono-font text-sm text-white">
                <slot>{{ text }}</slot>
            </div>
            <!-- Continue Button -->
            <UButton label="Tap to continue..." variant="link" size="lg" class="roboto-mono-font text-[#FFA828] hover:text-[#ff9610]
                 active:text-[#ff9610] transition-colors mt-auto" block :to="to" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    character?: string
    speaker?: string
    text?: string
    to?: string
}>()

// const {
//     character = "char_dionisia",
//     speaker = "Mommy Dionisia",
//     text = "Text goes here",
//     to = "/"
// } = props
</script>

<style scoped>
/* Add customizations here */
</style>
