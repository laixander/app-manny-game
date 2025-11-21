<template>
    <div class="flex items-center gap-1 bg-white/10 rounded-full p-2 shadow-md shadow-black/10 backdrop-blur-sm self-start">
        <div class="bg-white rounded-full p-1">
            <UIcon name="i-lucide-clock" class="text-red-800 flex shrink-0" />
        </div>
        <div class="roboto-mono-font text-white">
            {{ time }}
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    time: string
}>()
</script>