<template>
    <div :class="['bg-[#5B21B6] p-6 border-t-4 border-white/15', wrapperClass]">
        <div class="roboto-mono-font text-xs text-white uppercase mb-4">
            {{ title }}
        </div>
        <div class="roboto-mono-font text-sm text-pretty text-white/65 whitespace-pre-line">
            {{ displayed }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
    title?: string
    text?: string
    wrapperClass?: string
}>()

// Typewriter state
const displayed = ref("")
let index = 0

onMounted(() => {
    const interval = setInterval(() => {
        if (!props.text) return
        displayed.value += props.text[index]
        index++
        if (index >= props.text.length) clearInterval(interval)
    }, 25)   // speed
})
</script>