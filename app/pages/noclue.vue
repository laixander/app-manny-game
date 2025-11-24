<template>
    <Page
        :background="{
            src: '/img/bg_towerbridge.png',
            size: 'half',
            opacity: 1,
            overlay: true,
        }"
    >
        <Timer time="16:00" label="You Selected" destination="Tower Bridge" />
        <template #footer>
            <Drawer title="Clue Discoveries">
                <ClueCard />
                <Button label="Continue Exploring" />
            </Drawer>
        </template>
    </Page>
</template>
<script setup lang="ts">
// logic
</script>