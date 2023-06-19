<template>
  <div class="home">
    <MusicPlayer />
    <SongList :songs="getSongs" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store/Home'
import SongList from '@/components/SongList.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'

const homeStore = useHomeStore()
const { getSongs } = storeToRefs(homeStore)
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 1600px;
  max-height: 824px;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    max-height: initial;
    justify-content: center;
  }
}
</style>
