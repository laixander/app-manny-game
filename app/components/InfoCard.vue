<template>
    <div class="flex flex-col gap-4 p-6 rounded-lg
           bg-linear-to-t from-[#163084] to-[#0F2059]
           shadow-xl shadow-white/5">
        <div class="righteous-font text-2xl text-white text-center">
            {{ title }}
        </div>

        <div class="roboto-mono-font text-sm text-white/60 text-center">
            {{ description }}
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
    description?: string
}>()

// const {
//   title = "Manny is missing!",
//   description = "The boxing legend disappeared 3 days before his championship fight. Intelligence suggests he's traveling the world for a secret mission. Time is running out!"
// } = props
</script>
