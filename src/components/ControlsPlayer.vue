<template>
  <div class="controlsPlayer">
    <ButtonPlayer size="1vw" @click="previousSong" icon="icon-previous" />
    <ButtonPlayer
      size="1.5vw"
      margin-x="1rem"
      icon="icon-pause"
      v-if="getIsPlayingSong"
      @click="pauseCurrentSong"
    />
    <ButtonPlayer
      v-else
      size="1.5vw"
      margin-x="1rem"
      icon="icon-play"
      @click="playCurrentSong"
    />
    <ButtonPlayer size="1vw" @click="nextSong" icon="icon-next" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store/Home'
import ButtonPlayer from './ButtonPlayer.vue'

const { previousSong, pauseCurrentSong, playCurrentSong, nextSong } =
  useHomeStore()
const { getIsPlayingSong } = storeToRefs(useHomeStore())
</script>

<style lang="scss" scoped>
.controlsPlayer {
  width: 100%;
  display: flex;
  margin-bottom: 2vw;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    margin-bottom: 1rem;
  }
}
</style>
