<template>
    <Page>
        <InfoCard>
            <NuxtImg src="img/trophy.png" class="w-35 mx-auto" />
            <div class="space-y-1">
                <div class="righteous-font text-2xl text-center text-[#FFA828] uppercase">
                    Mission Complete!
                </div>
                <div class="roboto-mono-font font-medium text-sm text-center uppercase opacity-50">
                    Manny Found Successfully!
                </div>
            </div>
            <div class="roboto-mono-font text-xs text-center text-pretty leading-5 p-3 rounded-lg bg-[#FFBF00]/40 border border-[#FFA828]">
                You successfully tracked down Manny Pacquiao to his training gym in Manila! He was preparing for his next championship fight. Excellent detective work!
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-linear-to-t from-[#00388C] to-[#6C52FF] text-center p-4 rounded-lg space-y-1">
                    <div class="righteous-font font-medium text-2xl">4</div>
                    <div class="roboto-mono-font text-xs uppercase">Clues</div>
                </div>
                <div class="bg-linear-to-t from-[#08AF63] to-[#5FDA4F] text-center p-4 rounded-lg space-y-1">
                    <div class="righteous-font font-medium text-2xl">6</div>
                    <div class="roboto-mono-font text-xs uppercase">Cities</div>
                </div>
                <div class="bg-linear-to-t from-[#FF0062] to-[#FF5900] text-center p-4 rounded-lg space-y-1">
                    <div class="righteous-font font-medium text-2xl">112m</div>
                    <div class="roboto-mono-font text-xs uppercase">Time</div>
                </div>
            </div>
            <NuxtImg src="img/confetti_01.png" class="absolute -left-10 w-40" />
            <NuxtImg src="img/confetti_02.png" class="absolute -right-10 w-40" />
        </InfoCard>

        <template #footer>
            <div class="p-6">
                <Button label="Play Again" />
            </div>
        </template>
    </Page>
</template>