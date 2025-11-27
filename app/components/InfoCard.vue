<template>
    <div 
        class="relative w-full flex flex-col gap-4 p-6 rounded-lg bg-linear-to-t from-[#163084] to-[#0F2059] shadow-xl shadow-white/5 overflow-hidden"
    >
        <div v-if="title" class="righteous-font text-2xl text-center text-white">
            {{ title }}
        </div>
        <div v-if="description" class="roboto-mono-font text-sm text-pretty text-white/60 text-center">
            {{ displayed }}
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
    description?: string
}>()

const emit = defineEmits(["finished"])   // ← ADD THIS

const displayed = ref("")
let index = 0

onMounted(() => {
    const interval = setInterval(() => {
        if (!props.description) return
        
        displayed.value += props.description[index]
        index++

        // Done typing → EMIT finished
        if (index >= props.description.length) {
            clearInterval(interval)
            emit("finished")   // ← FIRE EVENT HERE
        }
    }, 25)
})

// const {
//   title = "Manny is missing!",
//   description = "The boxing legend disappeared 3 days before his championship fight. Intelligence suggests he's traveling the world for a secret mission. Time is running out!"
// } = props
</script>
