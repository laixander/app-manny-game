<template>
    <div class="p-6 rounded-t-2xl space-y-6 bg-linear-to-b from-[#1C58A7] to-[#092B59]">
        <div class="flex items-center justify-between">
            <div class="righteous-font text-2xl">
                {{ title }}
            </div>
            <!-- <div class="righteous-font text opacity-30">
                1/3
            </div> -->
        </div>
        <slot />
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    title?: string
}>()
</script>