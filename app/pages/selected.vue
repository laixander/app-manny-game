<template>
    <Page
        :background="{
            src: '/img/bg_towerbridge.png',
            size: 'cover',
            opacity: 0.9,
            overlay: true,
            blur: 3
        }"
    >
        <Timer time="16:00" label="You Selected" destination="Tower Bridge" />
        <template #footer>
            <DialogBox v-bind="dialog" />
        </template>
    </Page>
</template>
<script setup lang="ts">
const dialog = {
    character: 'char_taxidriver',
    speaker: 'Taxi Driver', 
    text: "Lots of tourists, no boxers." ,
    to: '/noclue'
}
</script>