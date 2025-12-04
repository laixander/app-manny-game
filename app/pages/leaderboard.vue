<template>
    <Page 
        title="Leaderboard"
        :background="{
            src: 'img/bg_intro.png',
            size: 'cover',
            opacity: 0.7
        }"
    >
        <div class="absolute z-10 inset-0 min-h-screen bg-[url(/img/confetti_full.png)] bg-cover bg-center blur-xs"></div>
        <div class="w-full z-50">
            <div class="flex items-end gap-4 px-4">
                <div class="w-full text-center space-y-4">
                    <UAvatar src="/img/avatar_01.png" alt="" size="3xl" class="ring-3" />
                    <div>
                        <div class="righteous-font text-lg">Chris Jordan</div>
                        <div class="roboto-mono-font">51221</div>
                    </div>
                    <div class="righteous-font text-4xl bg-linear-to-t from-[#A0A0A0] to-[#C0C0C0] rounded-t-xl px-4 py-2">
                        2
                    </div>
                </div>
                <div class="w-full text-center space-y-4">
                    <UAvatar src="/img/avatar_02.png" alt="" size="3xl" class="ring-3" />
                    <div>
                        <div class="righteous-font text-lg">Jamie Taylor</div>
                        <div class="roboto-mono-font">52453</div>
                    </div>
                    <div class="righteous-font text-5xl bg-linear-to-t from-[#FFA828] to-[#FFD700] rounded-t-xl p-4">
                        1
                    </div>
                </div>
                <div class="w-full text-center space-y-4">
                    <UAvatar src="/img/avatar_03.png" alt="" size="3xl" class="ring-3" />
                    <div>
                        <div class="righteous-font text-lg">Morgan Lee</div>
                        <div class="roboto-mono-font">48955</div>
                    </div>
                    <div class="righteous-font text-4xl bg-linear-to-t from-[#8B4513] to-[#CD7F32] rounded-t-xl px-4 py-2">
                        3
                    </div>
                </div>
            </div>
            <div class="bg-black/20 rounded-2xl backdrop-blur-xs box-shadow">
                <div v-for="player in players" :key="player.rank" class="flex items-center gap-3 border-b border-white/10 last:border-0 p-4">
                    <div class="righteous-font font-medium text-xl bg-white/20 rounded-full size-10 flex justify-center items-center">
                        {{ player.rank }}
                    </div>
                    <UAvatar :src="'/img/' + player.avatar" :alt="player.name" size="xl" />
                    <div class="righteous-font">
                        {{ player.name }}
                    </div>
                    <div class="roboto-mono-font ml-auto">
                        {{ player.points }}
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <div class="p-6">
                <Button label="Back to Main Page" to="/" />
            </div>
        </template>
    </Page>
</template>
<script setup lang="ts">
import { avatar } from '#build/ui';

const players = [
    { rank: 4, avatar: 'avatar_04.png', name: 'Alex Mercer', points: 48842 },
    { rank: 5, avatar: 'avatar_05.png', name: 'Justin Botosh', points: 48711 },
    { rank: 6, avatar: 'avatar_06.png', name: 'Maria Korsgaard', points: 48621 },
    { rank: 7, avatar: 'avatar_07.png', name: 'Eliot Mercer', points: 48542 },
    { rank: 8, avatar: 'avatar_08.png', name: 'Jasper Quinn', points: 47533 },
    { rank: 9, avatar: 'avatar_09.png', name: 'Milo Thorne', points: 47443 },
    { rank: 10, avatar: 'avatar_10.png', name: 'Finnian Blake', points: 47359 },
]
</script>
<style scoped>
.box-shadow {
    box-shadow: 0 4px 20px 0 rgba(255, 255, 255, 0.25), 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03);
}
</style>