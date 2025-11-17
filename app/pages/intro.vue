<template>
    <div class="relative min-h-screen overflow-hidden">
        <div class="absolute inset-0 bg-[url('/img/bg_intro.png')] bg-cover bg-no-repeat bg-bottom opacity-25"></div>

        <!-- content -->
        <div class="relative z-10 flex flex-col items-center gap-8 py-12">
            <div>
                <NuxtImg src="img/manny_icon.png" class="w-40" />
            </div>

            <div
                class="flex flex-col gap-4 p-6 mx-6 rounded-lg bg-gradient-to-t from-[#163084] to-[#0F2059] drop-shadow-xl drop-shadow-white/5">
                <div class="righteous-font text-2xl text-white text-center">
                    Manny is missing!
                </div>
                <div class="roboto-mono-font text-sm text-white text-center">
                    The boxing legend disappeared 3 days before his championship fight. Intelligence suggests he's
                    traveling the world for a secret mission. Time is running out!
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>