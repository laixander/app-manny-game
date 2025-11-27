<template>
    <Page
        :background="{
            overlay: true,
            src: '/img/bg_buckingham.png',
            size: 'cover',
            opacity: showDialog ? 0.9 : 1,
            blur: showDialog ? 3 : 0,
            height: showDialog ? '100vh' : '75vh'
        }"
    >
        <Timer label="You Selected" destination="Buckingham Palace" />

        <template #footer>

            <!-- Dialog Transition -->
            <Transition name="dialog-fade-slide">
                <DialogBox
                    v-if="showDialog"
                    v-bind="dialog"
                    @continue="openDrawer"
                />
            </Transition>

            <!-- Drawer Transition -->
            <Transition name="drawer-slide-up">
                <Drawer v-if="showDrawer" title="Clue Discoveries" wrapperClass="p-6 space-y-6">
                    <ClueCard v-bind="noClue" @finished="clueFinished = true" />

                    <!-- Buttons only appear after clueFinished -->
                    <div class="grid gap-4 mt-16 min-h-[120px]">
                        <template v-if="clueFinished">
                            <Button label="Continue Exploring" to="/destination/london" />
                            <Button label="Return" variant="white" to="/destination" />
                        </template>
                    </div>
                </Drawer>
            </Transition>
        </template>
    </Page>
</template>

<script setup lang="ts">
const showDialog = ref(true)
const showDrawer = ref(false)
const clueFinished = ref(false)

const dialog = {
    character: "photographer",
    speaker: "Photographer",
    text: "Only royals here, sorry.",
}

const noClue = {
    title: "❌ No Clue Found",
    text: "The photographer has no idea where Manny is."
}

const openDrawer = () => {
    showDialog.value = false
    // Delay Drawer until dialog animation finishes
    setTimeout(() => {
        showDrawer.value = true
    }, 200)
}

</script>