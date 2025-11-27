<template>
    <div class="relative flex flex-col">
        <div class="absolute bottom-0 bg-[#113E79] w-full min-h-50"></div>
        <NuxtImg v-if="character" :src="'img/char_' + character + '.png'"
            class="ml-auto w-80 z-10 transform transition-all duration-500 ease-out" :class="{
                'translate-x-0 opacity-100': showCharacter,
                'translate-x-12 opacity-0': !showCharacter
            }" />

        <div class="absolute bottom-0 bg-[#113E79] w-full min-h-50"></div>

        <div
            class="absolute z-20 bottom-0 flex flex-col p-6 w-full min-h-50 border-t-4 border-[#FFA828] bg-black/20 backdrop-blur-2xl">
            <div class="absolute -top-9 left-0 righteous-font text-[#FFA828]
                bg-[#4D3107]/50 px-3 py-1 rounded-tr-md inline-block transform transition-all duration-500 ease-out"
                :class="{
                    'opacity-100': showText,
                    'opacity-0': !showText
                }">
                {{ speaker }}
            </div>

            <!-- Typewriter text -->
            <div class="roboto-mono-font text-sm text-white text-pretty whitespace-pre-line transform transition-all duration-500 ease-out"
                :class="{
                    'opacity-100': showText,
                    'opacity-0': !showText
                }">
                {{ displayed }}
            </div>
            <!-- Continue Button -->
            <UButton v-if="showContinue" label="Tap to continue..." variant="link" size="lg"
                class="roboto-mono-font text-[#FFA828] hover:text-[#ff9610] active:text-[#ff9610] transition-colors mt-auto"
                block @click="$emit('continue')" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
    character?: string
    speaker?: string
    text?: string
}>()

// Typewriter state
const displayed = ref('')
const showText = ref(false)
const showCharacter = ref(false)
const showContinue = ref(false)
let index = 0

onMounted(() => {
    // Show character first
    setTimeout(() => {
        showCharacter.value = true

        // Start typewriter after character enters
        setTimeout(() => {
            showText.value = true
            const interval = setInterval(() => {
                if (!props.text) return

                displayed.value += props.text[index]
                index++

                // When typewriter finishes, show Continue button
                if (index >= props.text.length) {
                    clearInterval(interval)
                    showContinue.value = true
                }
            }, 25)
        }, 500) // matches character animation
    }, 50)
})

// const {
//     character = "char_dionisia",
//     speaker = "Mommy Dionisia",
//     text = "Text goes here",
//     to = "/"
// } = props
</script>

<style scoped>
.dialog-fade-slide-enter-active,
.dialog-fade-slide-leave-active {
    transition: all 0.25s ease;
}

.dialog-fade-slide-enter-from,
.dialog-fade-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>