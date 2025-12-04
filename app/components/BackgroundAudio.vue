<template>
    <!-- Background Audio Button -->
    <div v-if="showButton" class="absolute bottom-2 right-2 z-50">
        <UButton color="neutral" variant="solid" size="xl" class="rounded-full shadow-lg backdrop-blur-md
               bg-white/10 hover:bg-white/20 dark:hover:bg-black" @click="toggleSound">
            <UIcon :name="isPlaying ? 'i-lucide-volume-2' : 'i-lucide-volume-x'" class="w-6 h-6" />
        </UButton>

        <audio ref="player" src="/audio/knockout_king.mp3" loop></audio>
    </div>

    <!-- Modal: always rendered -->
    <UModal v-model:open="showModal" prevent-close class="max-w-sm bg-[#EB3425] ring-[#F89090] ring-6 rounded-xl">
        <template #content>
            <div class="p-6 space-y-4">
                <h2 class="righteous-font uppercase text-xl text-white text-center">
                    Enable Audio?
                </h2>
                <p class="roboto-mono-font text-white text-center text-pretty">
                    To experience the full atmosphere of the "Where is Manny?", we recommend enabling background sound.
                </p>

                <div class="grid gap-2 mt-12">
                    <UButton size="xl" icon="i-lucide-volume-2" block
                        class="roboto-mono-font p-3.5 bg-[#FFA828] hover:bg-[#ff9610] active:bg-[#ff9610] focus-visible:outline-0 text-white transition-colors rounded-xl"
                        @click="allowSound">
                        Enable Audio
                    </UButton>
                    <UButton color="neutral" variant="ghost" size="xl" block
                        class="roboto-mono-font p-3.5 text-white hover:bg-white/20 active:bg-white/30 transition-colors rounded-xl"
                        @click="denySound">
                        No Thanks
                    </UButton>
                </div>
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showButton = ref(false)       // controls button appearance
const showModal = ref(false)  // controls modal visibility
const isPlaying = ref(false)
const player = ref<HTMLAudioElement | null>(null)

// --- Sound Controls ---
const startPlayback = async () => {
    if (!player.value) return
    try {
        await player.value.play()
        isPlaying.value = true
    } catch {
        console.warn('Audio blocked until interaction.')
    }
}

const toggleSound = async () => {
    if (!player.value) return
    if (isPlaying.value) {
        player.value.pause()
        isPlaying.value = false
    } else {
        await startPlayback()
    }
}

// --- Delayed appearance ---
onMounted(() => {
    // Only run audio logic on Index page
    if (route.path !== '/') return
    const stored = localStorage.getItem('soundPreference')
    if (stored === 'enabled') {
        startPlayback()
    }
    setTimeout(() => {
        showButton.value = true
        showModal.value = true
    }, 3800)
})

// --- Modal Buttons ---
const allowSound = () => {
    localStorage.setItem('soundPreference', 'enabled')
    startPlayback()
    showModal.value = false
}

const denySound = () => {
    localStorage.setItem('soundPreference', 'disabled')
    showModal.value = false
}
</script>∂
