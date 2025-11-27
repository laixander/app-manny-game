<template>
  <Page
    :background="{
      src: 'img/bg_intro.png',
      size: 'cover',
      opacity: 0.7
    }"
  >
    <!-- Manny Logo -->
    <Transition name="fade-slide">
      <NuxtImg v-if="showImg" src="img/manny_logo.png" class="w-40" />
    </Transition>

    <!-- Intro Info -->
    <Transition name="fade-slide">
      <InfoCard v-if="showIntro" v-bind="intro" @finished="onInfoFinished" />
    </Transition>

    <!-- Initial Clue -->
    <Transition name="fade-slide">
      <AlertCard v-if="showClue" v-bind="clue" />
    </Transition>

    <!-- Mission AlertCards -->
<TransitionGroup
  name="fade-slide"
  tag="div"
  class="grid gap-4 w-full"
>
  <AlertCard
    v-for="(alert, i) in shownAlerts"
    :key="alert.instruction" 
    simple
    v-bind="alert"
  />
</TransitionGroup>


    <template #footer>
      <!-- Continue Button -->
      <div v-if="showContinue" class="p-6">
        <Button label="Continue" @click="onContinue" />
      </div>

      <!-- Dialog -->
      <DialogBox
        v-if="showDialog"
        v-bind="dialog"
        @continue="onMissionClick"
      />
    </template>
  </Page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showContinue = ref(false)
const showClue = ref(false)
const showMission = ref(false)
const showDialog = ref(false)
const showIntro = ref(true)
const showImg = ref(true)

const clickCount = ref(0)
const shownAlerts = ref<typeof missions>([])

// --- DATA ---
const intro = {
  title: "Manny is missing!",
  description: "The boxing legend disappeared 3 days before his championship fight. Intelligence suggests he's traveling the world for a secret mission. Time is running out!"
}

const clue = {
  icon: 'icon_clue',
  title: 'Initial Clue',
  instruction: '"He was last seen where Big Ben strikes the hour. The Champion seeks something ancient in the land of kings."',
}

const missions = [
  { instruction: "Find Manny in 3 different countries", icon: 'icon_mission'},
  { instruction: "Gather evidence at each location", icon: 'icon_mission'},
  { instruction: "Find Manny before time runs out", icon: 'icon_mission'}
]

const dialog = {
  character: 'dionisia',
  speaker: 'Mommy Dionisia', 
  text: "Manny needs your help! He's gone missing just before his big fight." ,
}

// --- EVENTS ---
const onInfoFinished = () => {
  showContinue.value = true
}

const onContinue = () => {
  clickCount.value++

  // 1st click → show Clue
  if (clickCount.value === 1) {
    showClue.value = true
    return
  }

  // 2nd click → hide intro, show dialog
  if (clickCount.value === 2) {
    showImg.value = false
    showIntro.value = false
    showClue.value = false
    showContinue.value = false
    showDialog.value = true
  }
}

// Show mission AlertCards one by one
const onMissionClick = () => {
  clickCount.value++

  if (clickCount.value === 3) {
    showMission.value = true
    // push first mission after next tick to trigger enter
    setTimeout(() => shownAlerts.value.push(missions[0]), 50)
    return
  }
  if (clickCount.value === 4) {
    shownAlerts.value.push(missions[1])
    return
  }
  if (clickCount.value === 5) {
    shownAlerts.value.push(missions[2])
    return
  }
  if (clickCount.value === 6) {
    navigateTo('/destination/europe')
    return
  }
}
</script>

<style lang="css" scoped>
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-enter-active {
  transition: all 0.35s ease-out;
}

.fade-slide-enter-active > * {
  transition-delay: calc(var(--enter-index) * 0.1s);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>