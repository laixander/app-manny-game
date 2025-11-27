<template>
    <Page
        :background="{
            overlay: true,
            src: '/img/bg_bigben.png',
            size: 'cover',
            opacity: showTouristDialog || showDetectiveDialog ? 0.9 : 1,
            blur: showTouristDialog || showDetectiveDialog ? 3 : 0,
            height: showTouristDialog || showDetectiveDialog ? '100vh' : '75vh'
        }"
    >
        <Timer label="You Selected" destination="Big Ben" />

        <Transition name="clue-fade">
            <ClueCard v-if="showHasClue" v-bind="hasClue" />
        </Transition>

        <template #footer>

            <!-- Tourist Dialog -->
            <Transition name="dialog-fade-slide">
                <DialogBox
                    v-if="showTouristDialog"
                    v-bind="dialogs.tourist"
                    @continue="openDrawer"
                />
            </Transition>

            <!-- Detective Dialog -->
            <Transition name="dialog-fade-slide">
                <DialogBox
                    v-if="showDetectiveDialog"
                    v-bind="dialogs.detective"
                    @continue="goToNextDestination"
                />
            </Transition>

            <!-- Drawer -->
            <Transition name="drawer-slide-up">
                <Drawer v-if="showDrawer" title="Clue Discoveries" wrapperClass="p-6 space-y-6">
                    <ClueCard
                        v-bind="majorClue"
                        @finished="clueFinished = true"
                        variant="major"
                    />

                    <div class="grid gap-4 mt-16 min-h-[120px]">
                        <template v-if="clueFinished">
                            <Button label="Explore Other Cities" @click="showDetective" />
                            <Button label="Return" variant="white" to="/destination" />
                        </template>
                    </div>
                </Drawer>
            </Transition>
        </template>
    </Page>
</template>

<script setup lang="ts">
const showTouristDialog = ref(true)
const showDetectiveDialog = ref(false)
const showDrawer = ref(false)
const showHasClue = ref(false)
const clueFinished = ref(false)
const continueCount = ref(0)

// Combined dataset
const dialogs = {
    tourist: {
        character: "tourist",
        speaker: "Tourist",
        text: "He mentioned ancient warriors and sunny beaches.",
    },
    detective: {
        character: "detective",
        speaker: "Detective",
        text: "Warriors and beaches... clever hint, but not clever enough.",
    }
}

const majorClue = {
    title: "🔍 Major Clue Discovered",
    text: "He talked about a land known for its ancient warriors and beautiful coastlines — it seems he’s hinting at a place rich in both history and sunshine."
}

const hasClue = {
    title: "🔍 Clue Discovered",
    text: "He was talking about a land of warriors and sunshine."
}

// 1st → show clue
// 2nd → close tourist dialog + open drawer
const openDrawer = () => {
    continueCount.value++

    if (continueCount.value === 1) {
        showHasClue.value = true
        return
    }

    if (continueCount.value === 2) {
        showHasClue.value = false

        setTimeout(() => {
            showTouristDialog.value = false

            setTimeout(() => {
                showDrawer.value = true
            }, 200)
        }, 300)
    }
}

// When Explore Other Cities is clicked
const showDetective = () => {
    // close drawer
    showDrawer.value = false

    // show detective dialog
    setTimeout(() => {
        showDetectiveDialog.value = true
    }, 200)
}

// After detective dialog Continue
const goToNextDestination = () => {
    navigateTo('/destination')
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
