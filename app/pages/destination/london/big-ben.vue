<template>
    <Page
        :background="{
            overlay: true,
            src: '/img/bg_bigben.png',
            size: 'cover',
            opacity: showDialog ? 0.9 : 1,
            blur: showDialog ? 3 : 0,
            height: showDialog ? '100vh' : '75vh'
        }"
    >
        <Timer time="16:00" label="You Selected" destination="Big Ben" />

        <Transition name="clue-fade">
            <ClueCard v-if="showHasClue" v-bind="hasClue" />
        </Transition>

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
                    <ClueCard v-bind="majorClue" @finished="clueFinished = true" variant="major" />

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
const continueCount = ref(0)
const showHasClue = ref(false)

const dialog = {
    character: "tourist",
    speaker: "Tourist",
    text: "He mentioned ancient warriors and sunny beaches.",
}

const majorClue = {
    title: "🔍 Major Clue Discovered",
    text: "He talked about a land known for its ancient warriors and beautiful coastlines — it seems he’s hinting at a place rich in both history and sunshine."
}

const hasClue = {
    title: "🔍 Clue Discovered",
    text: "He was talking about a land of warriors and sunshine."
}

const openDrawer = () => {
    continueCount.value++

    // FIRST CLICK — show the hasClue card
    if (continueCount.value === 1) {
        showHasClue.value = true
        return
    }

    // SECOND CLICK — fade it out, then open drawer
    if (continueCount.value === 2) {

        // fade out
        showHasClue.value = false

        // wait for fade-out animation (~300ms)
        setTimeout(() => {
            showDialog.value = false

            // wait for dialog fade-out to finish
            setTimeout(() => {
                showDrawer.value = true
            }, 200)
        }, 300)

        return
    }
}
</script>

<style scoped>
.clue-fade-enter-from,
.clue-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.clue-fade-enter-active,
.clue-fade-leave-active {
    transition: all 0.3s ease;
}
</style>