<template>
    <Page background="/img/bg_intro.png">
        <NuxtImg src="img/manny_logo.png" class="w-40" />
        <InfoCard v-bind="intro" />
        <AlertCard v-bind="clue" />
        <template #footer>
            <div class="p-6">
                <Button />
            </div>
        </template>
    </Page>
</template>
<script setup lang="ts">
const intro = {
    title: "Manny is missing!",
    description: "The boxing legend disappeared 3 days before his championship fight. Intelligence suggests he's traveling the world for a secret mission. Time is running out!"
}

const clue = {
    icon: 'icon_clue',
    title: 'Initial Clue',
    instruction: '"He was last seen where Big Ben strikes the hour. The Champion seeks something ancient in the land of kings."',
}
</script>