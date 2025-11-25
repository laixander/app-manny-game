<template>
    <UButton
        size="xl"
        block
        :ui="{ base: 'righteous-font p-3.5' }"
        :class="buttonClasses"
        :to="to"
    >
        {{ label }}
    </UButton>
</template>

<script setup lang="ts">
const props = defineProps<{
    label: string
    variant?: 'orange' | 'white'
    to?: string
}>()

const buttonClasses = computed(() => {
    if (props.variant === 'white') {
        return "bg-white text-[#FFA828] hover:bg-[#fff4e3] active:bg-[#ffe7c2] transition-colors rounded-xl"
    }

    // default orange variant
    return "bg-[#FFA828] hover:bg-[#ff9610] active:bg-[#ff9610] text-white transition-colors rounded-xl"
})
</script>
