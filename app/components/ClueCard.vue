<template>
    <div class="w-full rounded-2xl p-4 space-y-4" :class="clueCardClasses">
        <div class="roboto-mono-font uppercase">
            {{ title }}
        </div>
        <div class="roboto-mono-font text-sm text-pretty italic py-3 px-4 rounded-xl border border-white/40 bg-white/20 whitespace-pre-line transform transition-all duration-500 ease-out"
            :class="{
                'translate-y-0 opacity-100': showBox,
                'translate-y-12 opacity-0': !showBox
            }">
            {{ displayed }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
    title?: string
    variant?: 'default' | 'major'
    text?: string
}>()

const clueCardClasses = computed(() => {
    if (props.variant === 'major') {
        return "bg-linear-to-t from-[#804C00] to-[#0E3455] shadow-[0_4px_20px_rgba(255,191,0,0.5)]"
    }

    // default orange variant
    return "bg-linear-to-t from-[#2045BF] to-[#0F2059]"
})

// Typewriter state
const displayed = ref("")
const showBox = ref(false)
let index = 0

const emit = defineEmits<{
    (e: 'finished'): void
}>()

onMounted(() => {
    // Animate box in
    setTimeout(() => {
        showBox.value = true

        // Start typewriter after box appears
        const interval = setInterval(() => {
            if (!props.text) return
            displayed.value += props.text[index]
            index++
            if (index >= props.text.length) {
                clearInterval(interval)
                // Emit finished event
                emit('finished')
            }
        }, 25)
    }, 50)
})
</script>