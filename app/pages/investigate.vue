<template>
    <Page 
        :background="{
            src: '/img/bg_london.png',
            size: 'contain',
            opacity: 1,
            overlay: true
        }"
    >
        <Timer time="16:00" label="Exploring" destination="London" />
        <template #footer>
            <Drawer title="Investigate Place">
                <div class="grid gap-4 w-full mb-8">
                    <ActionCard
                        v-for="(place, i) in places"
                        v-bind="place"
                        :key="i" 
                    />
                </div>
            </Drawer>
            <TipBox 
                title="💡 Mission Tips" 
                description="Visit different locations and gather intelligence. One of these locations contains valuable intel that will help you track Manny to his next destination." 
            />
        </template>
    </Page>
</template>

<script setup lang="ts">
const places = [
    {
        destination: "Tower Bridge",
        to: "/selected"
    },
    {
        destination: "Big Ben",
        to: "/selected"
    },
    {
        destination: "Buckingham Palace",
        to: "/selected"
    }, 
]
</script>