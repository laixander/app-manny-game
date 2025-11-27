<template>
    <Page :background="backgroundStyle">
        <Timer label="You Selected" :destination="currentPlace.destination" />

        <!-- Clue Card -->
        <Transition name="clue-fade">
            <ClueCard v-if="showHasClue" v-bind="currentPlace.hasClue" />
        </Transition>

        <template #footer>

            <Transition name="dialog-fade-slide">
                <DialogBox v-if="currentDialog" v-bind="currentDialog" @continue="onDialogContinue" />
            </Transition>

            <!-- Drawer -->
            <Transition name="drawer-slide-up">
                <Drawer v-if="showDrawer" title="Clue Discoveries" wrapperClass="p-6 space-y-6">
                    <ClueCard v-bind="currentPlace.majorClue || currentPlace.noClue || currentPlace.minorClue"
                        @finished="clueFinished = true" :variant="currentPlace.majorClue ? 'major' : undefined" />

                    <div class="grid gap-4 mt-16 min-h-[120px]">
                        <template v-if="clueFinished">
                            <Button v-for="btn in currentPlace.buttons || []" :key="btn.label" :label="btn.label"
                                :variant="btn.variant || 'primary'" :to="btn.to"
                                @click="btn.onClick ? btn.onClick() : null" />
                        </template>
                    </div>
                </Drawer>
            </Transition>

        </template>
    </Page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const placeId = route.params.id as string

// UI state
const showDialog = ref(true)
const showDrawer = ref(false)
const clueFinished = ref(false)
const showHasClue = ref(false)
const showWitnessDialog = ref(true)
const showDetectiveDialog = ref(false)
const continueCount = ref(0)

// Dataset of places
const places: Record<string, any> = {
    towerbridge: {
        destination: 'Tower Bridge',
        background: '/img/pl_towerbridge.png',
        dialogs: {
            local: { character: 'taxidriver', speaker: 'Taxi Driver', text: 'Lots of tourists, no boxers today. Keep your eyes open!' }
        },
        noClue: { title: '❌ No Clue Found', text: 'The taxi driver shrugs. “Sorry mate, haven’t seen anything suspicious.”' },
        buttons: [
            { label: 'Continue Exploring', to: '/exploring/london' },
            { label: 'Return', variant: 'white', to: '/destination/europe' }
        ]
    },

    buckingham: {
        destination: 'Buckingham Palace',
        background: '/img/pl_buckingham.png',
        dialogs: {
            local: { character: 'photographer', speaker: 'Photographer', text: 'Only royals here, no peeking allowed!' }
        },
        noClue: { title: '❌ No Clue Found', text: 'The photographer shakes his head. “Nothing to see, move along!”' },
        buttons: [
            { label: 'Continue Exploring', to: '/exploring/london' },
            { label: 'Return', variant: 'white', to: '/destination/europe' }
        ]
    },

    bigben: {
        destination: 'Big Ben',
        background: '/img/pl_bigben.png',
        hasClue: { title: '🔍 Clue Discovered', text: 'Someone mentioned a land of warriors and sunshine.' },
        majorClue: { title: '🔍 Major Clue Discovered', text: 'All hints point to the Philippines—ancient warriors, sunny beaches, and paradise awaits!' },
        dialogs: {
            witness: { character: 'tourist', speaker: 'Tourist', text: 'I overheard talk about ancient warriors and sunny beaches.' },
            detective: { character: 'detective', speaker: 'Detective', text: 'This is it… the major lead points to the Philippines.' }
        },
        buttons: [
            {
                label: 'Explore Other Cities',
                onClick: () => {
                    showDrawer.value = false
                    setTimeout(() => {
                        showDetectiveDialog.value = true
                    }, 200)
                }
            },
            { label: 'Return', variant: 'white', to: '/destination/europe' }
        ],
        nextDestination: '/destination/asia'
    },

    eiffel: {
        destination: 'Eiffel Tower',
        background: '/img/pl_eiffel.png',
        dialogs: {
            local: { character: 'model', speaker: 'Model', text: 'Bonjour! Nothing suspicious around here, just tourists enjoying the view.' }
        },
        noClue: { title: '❌ No Clue Found', text: 'The model smiles politely but has no information for you.' },
        buttons: [
            { label: 'Continue Exploring', to: '/exploring/paris' },
            { label: 'Return', variant: 'white', to: '/destination/europe' }
        ]
    },

    notredame: {
        destination: 'Notre-Dame Cathedral',
        background: '/img/pl_notredame.png',
        dialogs: {
            local: { character: 'granny', speaker: 'Granny', text: 'Ah, so many tourists. Nothing unusual today, dear.' }
        },
        noClue: { title: '❌ No Clue Found', text: 'Granny shakes her head. “I haven’t seen him, child.”' },
        buttons: [
            { label: 'Continue Exploring', to: '/exploring/paris' },
            { label: 'Return', variant: 'white', to: '/destination/europe' }
        ]
    },

    louvre: {
        destination: 'Louvre Museum',
        background: '/img/pl_louvre.png',
        minorClue: { title: '🔍 Clue Discovered', text: 'A visitor whispered about Florence… could that be the next stop?' },
        dialogs: {
            local: { character: 'oldman', speaker: 'Oldman', text: 'I saw someone talking about a faraway city with art and history… Florence, perhaps?' },
            detective: { character: 'detective', speaker: 'Detective', text: 'Florence? That matches our earlier lead… we must investigate further.' }
        },
        buttons: [
            {
                label: 'Continue Exploring',
                onClick: () => {
                    showDrawer.value = false
                    setTimeout(() => {
                        showDetectiveDialog.value = true
                    }, 200)
                }
            },
            { label: 'Return', variant: 'white', to: '/destination/europe' }
        ],
        nextDestination: '/exploring/florence'
    },

    palazzo: {
        destination: 'Palazzo Pitti',
        background: '/img/pl_palazzo.png',
        dialogs: {
            local: { character: 'nana', speaker: 'Nana', text: 'Ah, the palace is quiet today, dear. But I heard someone mention Paris!' }
        },
        minorClue: { title: '🔍 Clue Discovered', text: 'Visitors whispered: “Next stop Paris…”' },
        buttons: [
            { label: 'Continue Exploring', to: '/exploring/paris' },
            { label: 'Return', variant: 'white', to: '/destination/europe' }
        ]
    },

    accademia: {
        destination: 'Accademia Gallery',
        background: '/img/pl_accademia.png',
        dialogs: {
            local: { character: 'student', speaker: 'Student', text: 'Studying art all day… but I heard someone talking about Paris nearby.' }
        },
        noClue: { title: '❌ No Clue Found', text: 'The student shrugs. “Focused on the paintings, nothing else.”' },
        buttons: [
            { label: 'Continue Exploring', to: '/exploring/florence' },
            { label: 'Return', variant: 'white', to: '/destination/europe' }
        ]
    },

    duomo: {
        destination: 'Florence Duomo',
        background: '/img/pl_duomo.png',
        minorClue: { title: '🔍 Clue Discovered', text: 'A visitor hinted: “Paris seems to be the next city to check.”' },
        dialogs: {
            local: { character: 'john', speaker: 'John', text: 'I heard something about Florence pointing to Paris.' },
            detective: { character: 'detective', speaker: 'Detective', text: 'Our first clue points to Paris… onward we go!' }
        },
        buttons: [
            {
                label: 'Continue Exploring',
                onClick: () => {
                    showDrawer.value = false
                    setTimeout(() => {
                        showDetectiveDialog.value = true
                    }, 200)
                }
            },
            { label: 'Return', variant: 'white', to: '/destination/europe' }
        ],
        nextDestination: '/exploring/paris'
    }
}

// Current place
const currentPlace = places[placeId] || places.towerbridge

const currentDialog = computed(() => {
    if (showDialog.value) return currentPlace.dialogs?.local
    if (showWitnessDialog.value) return currentPlace.dialogs?.witness
    if (showDetectiveDialog.value) return currentPlace.dialogs?.detective
    return null
})

const isCluePlace = !!currentPlace.hasClue

if (isCluePlace) {
    showDialog.value = false
    showWitnessDialog.value = true   // show witness automatically
} else {
    showDialog.value = true
    showWitnessDialog.value = false
}

const isDialogShowing = computed(() =>
    showDialog.value ||
    showWitnessDialog.value ||
    showDetectiveDialog.value
)

// Computed background style
const backgroundStyle = computed(() => ({
    overlay: true,
    src: currentPlace.background,
    size: 'cover',
    opacity: isDialogShowing.value ? 0.9 : 1,
    blur: isDialogShowing.value ? 3 : 0,
    height: isDialogShowing.value ? '100vh' : '75vh'
}))

// Open Drawer logic (handles clue and non-clue places)
const openDrawer = () => {
    continueCount.value++
    if (currentPlace.hasClue) {
        if (continueCount.value === 1) {
            showHasClue.value = true
            return
        }
        if (continueCount.value === 2) {
            showHasClue.value = false
            showWitnessDialog.value = false
            setTimeout(() => {
                showDrawer.value = true
            }, 200)
        }
    } else {
        showDialog.value = false
        setTimeout(() => showDrawer.value = true, 200)
    }
}

import { onMounted } from 'vue'

onMounted(() => {
    if (currentPlace.hasClue) {
        showDialog.value = false
        showWitnessDialog.value = true
    } else {
        showDialog.value = true
    }
})

const onDialogContinue = () => {
    if (showDetectiveDialog.value) {
        goToNextDestination()
    } else {
        openDrawer()
    }
}

// Navigate after detective dialog
const goToNextDestination = () => {
    showDetectiveDialog.value = false
    router.push(currentPlace.nextDestination || '/destination')
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

.dialog-fade-slide-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.dialog-fade-slide-enter-active {
    transition: all 0.35s ease-out;
}

.dialog-fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.drawer-slide-up-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.drawer-slide-up-enter-active {
    transition: all 0.35s ease-out;
}

.drawer-slide-up-enter-to {
    opacity: 1;
    transform: translateY(0);
}
</style>
