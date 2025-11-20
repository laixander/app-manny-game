<template>
    <Page background="/img/bg_intro.png">
        <div class="space-y-2">
            <div class="righteous-font text-xl text-white">
                Choose Destination
            </div>
            <div class="roboto-mono-font text-sm text-white/65">
                Each flight costs precious time. Choose wisely based on the clue!
            </div>
        </div>
        <div class="grid gap-4 w-full">
            <ActionCard
                v-for="(destination, i) in destinations"
                v-bind="destination"
                :key="i"
            />
        </div>
        <TipCard />
    </Page>
</template>
<script setup lang="ts">
import ActionCard from '~/components/ActionCard.vue';

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