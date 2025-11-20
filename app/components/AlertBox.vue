<template>
    <div
        class="relative w-full rounded-lg bg-black/20 shadow-lg shadow-white/10
            overflow-hidden before:absolute before:block before:bg-[#FFA828]
            before:w-1.5 before:h-full before:top-0 before:left-0"
        :class="title ? 'flex flex-col gap-4 p-6' : 'p-4'"
    >
        <div v-if="!title" class="roboto-mono-font text-sm text-white flex items-center gap-2">
            <NuxtImg :src="'img/' + icon + '.svg'" class="size-8" />
            {{ instruction }}
        </div>
        <template v-if="title">
            <div class="roboto-mono-font text-white font-semibold flex items-center gap-2">
                <NuxtImg :src="'img/' + icon + '.svg'" class="size-8" />
                {{ title }}
            </div>
            <div class="roboto-mono-font text-sm text-white text-center">
                {{ instruction }}
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
    instruction?: string
    icon?: string
}>()

// const {
//     instruction = "Instruction goes here",
//     icon = "icon_mission"
// } = props
</script>