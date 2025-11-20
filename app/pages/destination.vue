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
        <ActionCard
            v-for="(destination, i) in destinations"
            v-bind="destination"
            :key="i"
        />
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

const destinations = [
    {
        destination: "Paris",
        duration: "8",
        description: "City of Lights with the Eiffel Tower",
        flag: "img/flag_france.svg"
    },
    {
        destination: "London",
        duration: "12",
        description: "Home of Big Ben and the tower of London",
        flag: "img/flag_uk.svg"
    },
    {
        destination: "Florence",
        duration: "14",
        description: "Renaissance city with ancient architecture",
        flag: "img/flag_italy.svg"
    }, 
]
</script>