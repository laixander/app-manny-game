<template>
    <div class="space-y-2">
        <div class="righteous-font text-xl text-white">
            {{ title }}
        </div>
        <div class="roboto-mono-font text-sm text-white/65">
            {{ description }}
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    title?: string
    description?: string
}>()
</script>