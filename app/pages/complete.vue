<template>
    <Page :background="{ blur: 8 }">
        <template #background>

            <!-- LEFT BACKGROUND CONFETTI -->
            <Transition name="confetti-left">
                <NuxtImg
                    v-if="showConfetti"
                    src="img/confetti_01.png"
                    class="absolute -left-20 bottom-0 w-100"
                />
            </Transition>

            <!-- RIGHT BACKGROUND CONFETTI -->
            <Transition name="confetti-right">
                <NuxtImg
                    v-if="showConfetti"
                    src="img/confetti_02.png"
                    class="absolute -right-20 bottom-40 w-100"
                />
            </Transition>

            <div class="absolute inset-0 bg-linear-to-t from-[#092B59] to-[#1C58A7] opacity-50"></div>
        </template>

        <InfoCard>

            <!-- LEFT FOREGROUND CONFETTI -->
            <Transition name="confetti-left">
                <NuxtImg
                    v-if="showConfetti"
                    src="img/confetti_01.png"
                    class="absolute -left-5 top-15 w-40"
                />
            </Transition>

            <!-- RIGHT FOREGROUND CONFETTI -->
            <Transition name="confetti-right">
                <NuxtImg
                    v-if="showConfetti"
                    src="img/confetti_02.png"
                    class="absolute -right-5 w-40"
                />
            </Transition>

            <NuxtImg src="img/trophy.png" class="w-35 mx-auto" />

            <div class="space-y-1">
                <div class="righteous-font text-2xl text-center text-[#FFA828] uppercase">
                    Mission Complete!
                </div>
                <div class="roboto-mono-font font-medium text-sm text-center uppercase opacity-50">
                    Manny Found Successfully!
                </div>
            </div>

            <div class="roboto-mono-font text-xs text-center text-pretty leading-5 p-3 rounded-lg bg-[#FFBF00]/40 border border-[#FFA828]">
                You successfully tracked down Manny Pacquiao to his training gym in Manila! He was preparing for his next championship fight. Excellent detective work!
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
                <Button label="Play Again" />
            </div>
        </template>
    </Page>
</template>
<script setup lang="ts">
const showConfetti = ref(false)

onMounted(() => {
    // small delay so animation triggers smoothly
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
/* -------------------------------
   MULTI-BOUNCE LEFT CONFETTI
-------------------------------- */
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

/* -------------------------------
   MULTI-BOUNCE RIGHT CONFETTI
-------------------------------- */
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