<template>
    <Page :background="{
        src: currentDataset.background,
        size: 'contain',
        opacity: 1,
        overlay: true
    }">
        <Timer label="Exploring" :destination="currentDataset.city" />

        <template #footer>
            <Drawer title="Investigate Place" titleClass="p-6">
                <div class="grid gap-4 w-full mb-8 px-6">
                    <ActionCard v-for="(place, i) in currentDataset.places" v-bind="place" :key="i" />
                </div>

                <TipBox :title="currentDataset.tip.title" :text="currentDataset.tip.text"
                    wrapperClass="min-h-[164px]" />
            </Drawer>
        </template>
    </Page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const cityId = route.params.id as string

// Multiple datasets for different cities
const datasets: Record<string, { city: string, background: string, places: any[], tip: { title: string, text: string } }> = {
    london: {
        city: "London",
        background: "/img/des_london.png",
        places: [
            { destination: "Tower Bridge", to: "/selected/towerbridge" },
            { destination: "Big Ben", to: "/selected/bigben" },
            { destination: "Buckingham Palace", to: "/selected/buckingham" }
        ],
        tip: {
            title: "💡 Mission Tips",
            text: "Visit different locations and gather intelligence. One of these locations contains valuable intel that will help you track Manny to his next destination."
        }
    },
    paris: {
        city: "Paris",
        background: "/img/des_paris.png",
        places: [
            { destination: "Eiffel Tower", to: "/selected/eiffel" },
            { destination: "Notre-Dame Cathedral", to: "/selected/notredame" },
            { destination: "Louvre Museum", to: "/selected/louvre" }
        ],
        tip: {
            title: "💡 Mission Tips",
            text: "Explore the landmarks carefully! One location has crucial clues about Manny's whereabouts."
        }
    },
    florence: {
        city: "Florence",
        background: "/img/des_florence.png",
        places: [
            { destination: "Palazzo Pitti", to: "/selected/palazzo" },
            { destination: "Accademia Gallery", to: "/selected/accademia" },
            { destination: "Florence Duomo", to: "/selected/duomo" }
        ],
        tip: {
            title: "💡 Mission Tips",
            text: "Check all the neighborhoods. One of them holds important information about Manny's next move."
        }
    }
}

// Pick the dataset based on route or fallback to London
const currentDataset = datasets[cityId] || datasets.london
</script>
