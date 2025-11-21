<template>
    <ULink v-if="to" :to="to">
        <div class="relative flex items-center gap-4 p-6 text-white w-full bg-[#0F2059] rounded-xl shadow-xl shadow-white/10 box-shadow">
            <div class="space-y-2">
                <div class="righteous-font text-2xl flex items-center gap-4">
                    {{ destination }}
                    <span class="roboto-mono-font font-normal text-xs text-[#FCD34D]">{{ duration }}hr flight</span>
                </div>
                <div class="roboto-mono-font text-sm text-start text-pretty text-white/65">{{ description }}</div>
            </div>
            <NuxtImg v-if="flag" :src="flag" class="w-16" />
        </div>
    </ULink>
</template>

<script setup lang="ts">
const props = defineProps<{
    destination?: string
    duration?: string
    description?: string
    flag?: string
    to?: string
}>()
</script>

<style scoped>
.box-shadow {
    box-shadow: 2px 0 2px 0 rgba(219, 234, 255, 0.60) inset, 0 2px 2px 0 rgba(219, 234, 255, 0.60) inset, 0 4px 20px 0 rgba(255, 255, 255, 0.25);
}
</style>