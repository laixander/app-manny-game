<template>
    <Page :background="{
        src: '/img/bg_destination.png',
        size: 'contain',
        opacity: 0.7
    }">
        <Timer />
        <Heading title="Choose Destination"
            description="Each flight costs precious time. Choose wisely based on the clue!" />

        <div class="grid gap-4 w-full">
            <ActionCard v-for="(destination, i) in currentDataset.destinations" v-bind="destination" :key="i" />
        </div>

        <template #footer>
            <TipBox :title="currentDataset.tip.title" :text="currentDataset.tip.text" />
        </template>
    </Page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const groupId = route.params.id as string

// Define multiple datasets with destinations + dynamic TipBox text
const datasets: Record<string, { destinations: any[], tip: { title: string, text: string } }> = {
    europe: {
        destinations: [
            { destination: "Paris", duration: "8", description: "City of Lights with the Eiffel Tower", flag: "img/flag_france.svg", to: "/exploring/paris" },
            { destination: "London", duration: "12", description: "Home of Big Ben and the Tower of London", flag: "img/flag_uk.svg", to: "/exploring/london" },
            { destination: "Florence", duration: "14", description: "Renaissance city with ancient architecture", flag: "img/flag_italy.svg", to: "/exploring/florence" }
        ],
        tip: {
            title: "💡 Detective Tip",
            text: "Pay attention to Big Ben! Which European city fits the clue?"
        }
    },
    asia: {
        destinations: [
            { destination: "Japan", duration: "8", description: "Land of samurai, cherry blossoms, and neon cities", flag: "img/flag_japan.svg", to: "/places/japan" },
            { destination: "Philippines", duration: "8", description: "Home of a boxing legend and sunny beaches", flag: "img/flag_philippines.svg", to: "/destination/philippines" },
            { destination: "Thailand", duration: "8", description: "Kingdom of smiles with golden temples and beaches", flag: "img/flag_thailand.svg", to: "/destination/thailand" }
        ],
        tip: {
            title: "💡 Detective Tip",
            text: "Follow the tropical clues! Which Asian city is the smartest choice?"
        }
    },
    america: {
        destinations: [
            { destination: "New York", duration: "12", description: "The city that never sleeps", flag: "img/flag_usa.svg", to: "/destination/new-york" },
            { destination: "Rio de Janeiro", duration: "14", description: "Famous for Carnival and Christ the Redeemer", flag: "img/flag_brazil.svg", to: "/destination/rio" },
            { destination: "Toronto", duration: "13", description: "Canada’s largest city with CN Tower", flag: "img/flag_canada.svg", to: "/destination/toronto" }
        ],
        tip: {
            title: "💡 Detective Tip",
            text: "Look for the landmark hints! Which American city fits the description?"
        }
    }
}

// Get dataset or fallback to Europe
const currentDataset = datasets[groupId] || datasets.europe
</script>