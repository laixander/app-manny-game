<template>
    <Page 
        :background="{
            src: '/img/bg_destination.png',
            size: 'contain',
            opacity: 0.7
        }"
    >
        <Timer />
        <Heading title="Choose Destination" description="Each flight costs precious time. Choose wisely based on the clue!" />
        <div class="grid gap-4 w-full">
            <ActionCard
                v-for="(destination, i) in destinations"
                v-bind="destination"
                :key="i"
            />
        </div>
        <template #footer>
            <TipBox 
                title="💡 Detective Tip" 
                text="Pay attention to the clue! &ldquo;Big Ben&rdquo; is a famous landmark. Which city would have the strongest connection?" 
            />
        </template>
    </Page>
</template>
<script setup lang="ts">
const destinations = [
    {
        destination: "Paris",
        duration: "8",
        description: "City of Lights with the Eiffel Tower",
        flag: "img/flag_france.svg",
        to: "/destination/paris"
    },
    {
        destination: "London",
        duration: "12",
        description: "Home of Big Ben and the tower of London",
        flag: "img/flag_uk.svg",
        to: "/destination/london"
    },
    {
        destination: "Florence",
        duration: "14",
        description: "Renaissance city with ancient architecture",
        flag: "img/flag_italy.svg",
        to: "/destination/florence"
    }, 
]
</script>