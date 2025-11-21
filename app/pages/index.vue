<template>
    <div class="flex flex-col items-center min-h-screen pt-12">
        <div class="flex flex-col items-center gap-16 w-full bg-[url(/img/bg_ring.png)] bg-contain bg-no-repeat bg-bottom">
            <div class="space-y-4">
                <div class="maiden-orange-font text-white text-4xl text-center">
                    Where is
                </div>
                <div>
                    <NuxtImg src="img/manny_title.svg" class="w-80" />
                </div>
            </div>
            <div>
                <NuxtImg src="img/manny_logo.png" class="w-40" />
            </div>
            <div class="w-full border-y-6 border-[#F89090] bg-[#EB3425] py-3.5 space-y-1.5">
                <div class="righteous-font text-2xl text-white text-center uppercase">
                    Boxing Emergency!
                </div>
                <div class="righteous-font text-white text-center">
                    The Champion has disappeared before the big fight!
                </div>
            </div>
        </div>

        <div class="roboto-mono-font text-white text-sm text-center leading-6 px-6 py-8 my-auto">
            Can you find Manny?<br />
            Follow the clues around the boxing world!
        </div>

        <div class="relative w-full">
            <div class="absolute top-10 inset-0 bg-[url(/img/bg_ellipse.svg)] bg-size-[500px] bg-no-repeat bg-top"></div>
             <div class="relative flex items-center justify-center -space-x-1.5 z-10">
                <UButton icon="i-ri-trophy-fill" size="lg" :ui="{ base: 'rounded-full p-6', leadingIcon: 'size-6', }"
                    class="border-14 border-[#113E79] bg-[#FFA828] ring-6 ring-inset ring-[#FFD393] hover:bg-[#ff9610] active:bg-[#ff9610] transition-colors" />
                <UButton icon="i-ic-round-play-arrow" size="lg" :ui="{ base: 'rounded-full p-4', leadingIcon: 'size-18', }"
                    class="border-14 border-[#113E79] bg-[#FFA828] ring-6 ring-inset ring-[#FFD393] hover:bg-[#ff9610] active:bg-[#ff9610] transition-colors" to="/intro" />
                <UButton icon="i-ri-settings-3-fill" size="lg" :ui="{ base: 'rounded-full p-6', leadingIcon: 'size-6', }"
                    class="border-14 border-[#113E79] bg-[#FFA828] ring-6 ring-inset ring-[#FFD393] hover:bg-[#ff9610] active:bg-[#ff9610] transition-colors" />
            </div>

            <div class="relative roboto-mono-font font-medium text-[#A96500] text-center leading-6 px-6 py-8 z-10">
                Press the button to start
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">

</script>