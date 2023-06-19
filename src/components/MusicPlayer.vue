<template>
  <div class="musicPlayer">
    <SongInformation v-if="getSongSelected.id !== ''" :song="getSongSelected" />
    <SongInformationSkelton v-else />
    <ControlsPlayer />
    <SongSlider />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store/Home'
import SongSlider from './SongSlider.vue'
import ControlsPlayer from './ControlsPlayer.vue'
import SongInformation from './SongInformation.vue'
import SongInformationSkelton from './SongInformationSkelton.vue'

const homeStore = useHomeStore()
const { getSongSelected } = storeToRefs(homeStore)
</script>

<style lang="scss" scoped>
.musicPlayer {
  width: 60%;
  height: 100%;
  display: flex;
  padding-top: 3rem;
  align-items: center;
  padding-bottom: 3rem;
  flex-direction: column;
  justify-content: start;
  color: variables.$primary-color-text;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
}
</style>
