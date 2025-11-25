<template>
    <Page 
        title="Your mission" 
        :background="{
            src: 'img/bg_intro.png',
            size: 'cover',
            opacity: 0.7
        }"
    >
        <div class="grid gap-4 w-full">
            <AlertCard
                simple
                v-for="(mission, i) in missions"
                v-bind="mission"
                :key="i"
            />
        </div>
        <template #footer>
            <DialogBox v-bind="dialog" @continue="navigateToNext" />
        </template>
    </Page>
</template>
<script setup lang="ts">
const missions = [
    { instruction: "Find Manny in 3 different countries", icon: 'icon_mission'},
    { instruction: "Gather evidence at each location", icon: 'icon_mission'},
    { instruction: "Find Manny before time runs out", icon: 'icon_mission'}
]

const dialog = {
    character: 'dionisia',
    speaker: 'Mommy Dionisia', 
    text: "Manny needs your help! He's gone missing just before his big fight." ,
}

const navigateToNext = () => {
    navigateTo('/destination'); // 👈 your next page
}
</script>