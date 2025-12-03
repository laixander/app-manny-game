<template>
  <div class="flex flex-col items-center min-h-screen pt-8 overflow-hidden">
    <div class="flex flex-col items-center gap-12 w-full">

      <!-- BG Ring Fade-in -->
      <Transition name="bg-ring" appear>
        <div class="flex flex-col items-center gap-12 w-full bg-[url(/img/bg_ring.png)] bg-contain bg-no-repeat bg-bottom">
          
          <div class="space-y-4">

            <!-- "Where is" -->
            <Transition name="slide-down" appear>
              <div class="maiden-orange-font text-white text-4xl text-center">
                Where is
              </div>
            </Transition>

            <!-- Manny Title Image -->
            <Transition name="scale-up" appear>
              <div>
                <NuxtImg src="img/manny_title.svg" class="w-80" />
              </div>
            </Transition>

          </div>

          <!-- Manny Logo Scale-up + Bounce -->
          <Transition name="scale-up-delayed" appear>
            <div class="bounce-logo">
              <NuxtImg src="img/manny_logo.png" class="w-40" />
            </div>
          </Transition>

          <!-- Boxing Emergency Box Slide-up -->
          <Transition name="slide-up" appear>
            <div class="w-full border-y-6 border-[#F89090] bg-[#EB3425] p-3.5 space-y-1.5">
              <div class="righteous-font text-2xl text-white text-center uppercase">
                Boxing Emergency!
              </div>
              <div class="righteous-font text-white text-center text-pretty leading-6">
                The Champion has disappeared before the big fight!
              </div>
            </div>
          </Transition>

        </div>
      </Transition>

    </div>

    <!-- Typewriter Text -->
    <Transition name="fade-delayed" appear>
      <div class="roboto-mono-font text-white text-sm text-center text-pretty leading-6 p-6 my-auto">
        <span ref="line1"></span><br />
        <span ref="line2"></span>
      </div>
    </Transition>

    <div class="relative w-full">

      <!-- ELLIPSE -->
      <Transition name="slide-up" appear>
        <div class="absolute top-16 inset-0 bg-[url(/img/bg_ellipse.svg)] bg-size-[500px] bg-no-repeat bg-top">
        </div>
      </Transition>

      <!-- BUTTON GROUP -->
      <Transition name="slide-down-delayed" appear>
        <div class="relative text-center -space-x-1.5 z-10">
          <UButton icon="i-ri-trophy-fill" size="lg" :ui="{ base: 'rounded-full p-6', leadingIcon: 'size-6' }"
            class="border-14 border-[#113E79] bg-[#FFA828] ring-6 ring-inset ring-[#FFD393] hover:bg-[#ff9610] active:bg-[#ff9610] transition-colors" />
          <UButton icon="i-ic-round-play-arrow" size="lg" to="/mission" :ui="{ base: 'rounded-full p-4', leadingIcon: 'size-18' }"
            class="border-14 border-[#113E79] bg-[#FFA828] ring-6 ring-inset ring-[#FFD393] hover:bg-[#ff9610] active:bg-[#ff9610] transition-colors" />
          <UButton icon="i-ri-settings-3-fill" size="lg" :ui="{ base: 'rounded-full p-6', leadingIcon: 'size-6' }"
            class="border-14 border-[#113E79] bg-[#FFA828] ring-6 ring-inset ring-[#FFD393] hover:bg-[#ff9610] active:bg-[#ff9610] transition-colors" />
        </div>
      </Transition>

      <!-- LABEL -->
      <Transition name="slide-up-delayed" appear>
        <div class="relative roboto-mono-font font-medium text-[#A96500] text-center leading-6 px-6 py-8 z-10">
          Press the button to start
        </div>
      </Transition>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)

const textLine1 = "Can you find Manny?"
const textLine2 = "Follow the clues around the boxing world!"

const typeDelay = 50
const startDelay = 500

onMounted(() => {
  if (!line1.value || !line2.value) return

  function typewriter(el: HTMLElement, text: string, delay = 50, callback?: () => void) {
    let index = 0
    el.textContent = ''
    const interval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(interval)
        callback?.()
        return
      }
      el.textContent += text[index]
      index++
    }, delay)
  }

  setTimeout(() => {
    typewriter(line1.value!, textLine1, typeDelay, () => {
      typewriter(line2.value!, textLine2, typeDelay)
    })
  }, startDelay)
})
</script>

<style scoped>
/* BG Ring Fade-in */
.bg-ring-enter-from { opacity: 0; }
.bg-ring-enter-to { opacity: 1; }
.bg-ring-enter-active { transition: opacity 1s ease-out; }

/* Slide-down for "Where is" */
.slide-down-enter-from { opacity: 0; transform: translateY(-20px); }
.slide-down-enter-to { opacity: 1; transform: translateY(0); }
.slide-down-enter-active { transition: all 0.7s ease-out; }

/* Scale-up */
.scale-up-enter-from { opacity: 0; transform: scale(0.75); }
.scale-up-enter-to { opacity: 1; transform: scale(1); }
.scale-up-enter-active { transition: all 0.7s ease-out 0.15s; }

/* Scale-up delayed (logo bounce) */
.scale-up-delayed-enter-from { opacity: 0; transform: scale(0.75); }
.scale-up-delayed-enter-to { opacity: 1; transform: scale(1); }
.scale-up-delayed-enter-active { transition: all 0.7s ease-out 0.3s; }

/* Slide-up */
.slide-up-enter-from { opacity: 0; transform: translateY(20px); }
.slide-up-enter-to { opacity: 1; transform: translateY(0); }
.slide-up-enter-active { transition: all 0.7s ease-out 0.45s; }

/* Slide-up delayed (label) */
.slide-up-delayed-enter-from { opacity: 0; transform: translateY(20px); }
.slide-up-delayed-enter-to { opacity: 1; transform: translateY(0); }
.slide-up-delayed-enter-active { transition: all 0.7s ease-out 0.3s; }

/* Slide-down delayed (buttons) */
.slide-down-delayed-enter-from { opacity: 0; transform: translateY(-20px); }
.slide-down-delayed-enter-to { opacity: 1; transform: translateY(0); }
.slide-down-delayed-enter-active { transition: all 0.7s ease-out 0.15s; }

/* Fade delayed (typewriter) */
.fade-delayed-enter-from { opacity: 0; }
.fade-delayed-enter-to { opacity: 1; }
.fade-delayed-enter-active { transition: opacity 0.7s ease-out 0.8s; }

/* Bounce animation for logo */
@keyframes bounceLogo {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.bounce-logo {
  display: inline-block;
  animation: bounceLogo 2s ease-in-out infinite;
}
</style>
