<template>
    <Page background="/img/bg_destination.png">
        <Timer time="16:00" />
        <Heading title="Choose Destination" description="Each flight costs precious time. Choose wisely based on the clue!" />
        <div class="grid gap-4 w-full">
            <ActionCard
                v-for="(destination, i) in destinations"
                v-bind="destination"
                :key="i"
            />
        </div>
        <template #footer>
            <TipCard />
        </template>
    </Page>
</template>
<script setup lang="ts">
import ActionCard from '~/components/ActionCard.vue';

const destinations = [
    {
        destination: "Paris",
        duration: "8",
        description: "City of Lights with the Eiffel Tower",
        flag: "img/flag_france.svg",
        to: "/investigate"
    },
    {
        destination: "London",
        duration: "12",
        description: "Home of Big Ben and the tower of London",
        flag: "img/flag_uk.svg",
        to: "/investigate"
    },
    {
        destination: "Florence",
        duration: "14",
        description: "Renaissance city with ancient architecture",
        flag: "img/flag_italy.svg",
        to: "/investigate"
    }, 
]
</script>