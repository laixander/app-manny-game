<template>
    <UButton size="xl" block :ui="{ base: 'righteous-font p-3.5' }" class="bg-[#FFA828] hover:bg-[#ff9610] active:bg-[#ff9610] transition-colors rounded-xl" to="/mission">
        {{ label }}
    </UButton>
</template>
<script setup lang="ts">
const props = defineProps<{
    label: string
}>()
</script>