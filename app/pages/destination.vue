<template>
    <Page header="Your mission" background="/img/bg_intro.png">
        <div class="grid gap-4 w-full">
            <AlertCard
                simple
                v-for="(mission, i) in missions"
                v-bind="mission"
                :key="i"
            />
        </div>
        <ActionCard />
        <TipCard />
    </Page>
</template>
<script setup lang="ts">
import ActionCard from '~/components/ActionCard.vue';

const missions = [
    { instruction: "Find Manny in 3 different countries", icon: 'icon_mission'},
    { instruction: "Gather evidence at each location", icon: 'icon_mission'},
    { instruction: "Find Manny before time runs out", icon: 'icon_mission'}
]

const dialog = {
    character: 'char_dionisia',
    speaker: 'Mommy Dionisia', 
    text: "Manny needs your help! He's gone missing just before his big fight." ,
    to: '/'
}
</script>