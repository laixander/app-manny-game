<template>
    <div class="bg-[#5B21B6] p-6 border-t-4 border-white/15">
        <div class="roboto-mono-font text-xs text-white uppercase mb-4">
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