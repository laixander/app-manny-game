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

interface Dataset {
    city: string
    background: string
    places: { destination: string; to: string }[]
    tip: { title: string; text: string }
}

const route = useRoute()
const cityId = route.params.id as string

const datasets: Record<string, Dataset> = {
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
    },

    philippines: {
        city: "Manila",
        background: "/img/des_philippines.png",
        places: [
            { destination: "Luneta Park", to: "/selected/luneta" },
            { destination: "National Museum", to: "/selected/museum" },
            { destination: "Boxing Gym", to: "/selected/gym" }
        ],
        tip: {
            title: "💡 Mission Tips",
            text: "Check all the neighborhoods. One of them holds important information about Manny's next move."
        }
    }
}

// ✔ guaranteed Dataset, no TS error
const currentDataset: Dataset = (datasets[cityId] ?? datasets.london) as Dataset
</script>