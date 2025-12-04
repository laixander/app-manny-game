<template>
    <Page :background="{ blur: 12 }">
        <template #background>
            <div class="absolute inset-0 bg-linear-to-t from-[#851D15] to-[#EB3425]"></div>
            <Transition name="confetti-left">
                <NuxtImg
                    v-if="showConfetti"
                    src="img/x_mark.png"
                    class="absolute -left-40 -bottom-20 w-150 -rotate-25"
                />
            </Transition>

            <Transition name="confetti-right">
                <NuxtImg
                    v-if="showConfetti"
                    src="img/x_mark.png"
                    class="absolute -right-40 bottom-40 w-150 -rotate-25"
                />
            </Transition>
        </template>

        <InfoCard bgColor="bg-linear-to-t from-[#841618] to-[#590F10]">
            <Transition name="confetti-left">
                <NuxtImg
                    v-if="showConfetti"
                    src="img/x_mark.png"
                    class="absolute -left-15 w-40 -rotate-25"
                />
            </Transition>

            <Transition name="confetti-right">
                <NuxtImg
                    v-if="showConfetti"
                    src="img/x_mark.png"
                    class="absolute -right-15 top-20 w-40 -rotate-25"
                />
            </Transition>

            <NuxtImg src="img/times_up.png" class="w-35 mx-auto" />

            <div class="space-y-1">
                <div class="righteous-font text-2xl text-center text-[#FFA828] uppercase">
                    Time is Up!
                </div>
                <div class="roboto-mono-font font-medium text-sm text-center uppercase opacity-50">
                    Manny failed to find!
                </div>
            </div>

            <div class="roboto-mono-font text-xs text-center text-pretty leading-5 p-3 rounded-lg bg-[#FFBF00]/40 border border-[#FFA828]">
                The trail faded faster than you could follow. Manny was gone, leaving the investigation incomplete.
            </div>

            <div class="grid grid-cols-3 gap-4">
                <div
                    v-for="(stat, i) in stats"
                    :key="i"
                    class="bg-linear-to-t text-center p-4 rounded-lg space-y-1"
                    :class="[stat.color]"
                >
                    <div class="righteous-font font-medium text-2xl">{{ stat.value }}</div>
                    <div class="roboto-mono-font text-xs uppercase">{{ stat.label }}</div>
                </div>
            </div>
        </InfoCard>

        <template #footer>
            <div class="p-6">
                <Button label="Play Again" to="/" />
            </div>
        </template>
    </Page>
</template>

<script setup lang="ts">
const showConfetti = ref(false)

onMounted(() => {
    setTimeout(() => {
        showConfetti.value = true
    }, 50)
})

const stats = [
    { value: '4', label: 'Clue', color: 'from-[#00388C] to-[#6C52FF]' },
    { value: '6', label: 'Cities', color: 'from-[#08AF63] to-[#5FDA4F]' },
    { value: '112m', label: 'Time', color: 'from-[#FF0062] to-[#FF5900]' }
]
</script>

<style scoped>
.confetti-left-enter-from {
    opacity: 0;
    transform: translateX(-90px) scale(0.85) rotate(-6deg);
}
.confetti-left-enter-active {
    animation: confettiLeftBounce 0.30s ease-out;
}
.confetti-left-enter-to {
    opacity: 1;
}

@keyframes confettiLeftBounce {
    0%   { opacity: 0; transform: translateX(-90px) scale(0.85) rotate(-6deg); }
    40%  { opacity: 1; transform: translateX(0) scale(1.05) rotate(2deg); }
    60%  { transform: translateX(-10px) scale(0.97) rotate(-1deg); }
    80%  { transform: translateX(4px) scale(1.02) rotate(1deg); }
    100% { transform: translateX(0) scale(1) rotate(0deg); }
}

.confetti-right-enter-from {
    opacity: 0;
    transform: translateX(90px) scale(0.85) rotate(6deg);
}
.confetti-right-enter-active {
    animation: confettiRightBounce 0.30s ease-out;
}
.confetti-right-enter-to {
    opacity: 1;
}

@keyframes confettiRightBounce {
    0%   { opacity: 0; transform: translateX(90px) scale(0.85) rotate(6deg); }
    40%  { opacity: 1; transform: translateX(0) scale(1.05) rotate(-2deg); }
    60%  { transform: translateX(10px) scale(0.97) rotate(1deg); }
    80%  { transform: translateX(-4px) scale(1.02) rotate(-1deg); }
    100% { transform: translateX(0) scale(1) rotate(0deg); }
}
</style>