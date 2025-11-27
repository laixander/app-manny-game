<template>
    <Page :background="{
        src: '/img/bg_london.png',
        size: 'contain',
        opacity: 1,
        overlay: true
    }">
        <Timer label="Exploring" destination="London" />
        <template #footer>
            <Drawer title="Investigate Place" titleClass="p-6">
                <div class="grid gap-4 w-full mb-8 px-6">
                    <ActionCard v-for="(place, i) in places" v-bind="place" :key="i" />
                </div>
                <TipBox
                    title="💡 Mission Tips"
                    text="Visit different locations and gather intelligence. One of these locations contains valuable intel that will help you track Manny to his next destination." 
                    wrapperClass="min-h-[164px]"
                />
            </Drawer>
        </template>
    </Page>
</template>

<script setup lang="ts">
const places = [
    {
        destination: "Tower Bridge",
        to: "/destination/london/tower-bridge"
    },
    {
        destination: "Big Ben",
        to: "/destination/london/big-ben"
    },
    {
        destination: "Buckingham Palace",
        to: "/destination/london/buckingham-palace"
    },
]
</script>