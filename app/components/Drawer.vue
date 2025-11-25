<template>
    <div :class="['rounded-t-2xl bg-linear-to-b from-[#1C58A7] to-[#092B59]', wrapperClass]">
        <div :class="['righteous-font text-2xl', titleClass]">
            {{ title }}
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
    wrapperClass?: string
    titleClass?: string
}>()
</script>

<style scoped>
.drawer-slide-up-enter-from {
    opacity: 0;
    transform: translateY(100%);
}

.drawer-slide-up-enter-active {
    transition: all 0.3s ease-out;
}

.drawer-slide-up-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.drawer-slide-up-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.drawer-slide-up-leave-active {
    transition: all 0.3s ease-in;
}

.drawer-slide-up-leave-to {
    opacity: 0;
    transform: translateY(100%);
}
</style>
