<template>
  <input
    min="0"
    step="1"
    type="range"
    class="songSlider"
    :max="durationSong"
    @change="sectionSong"
    :value="currentSectionsSong"
    @mouseout="homeStore.mouseOut"
    @mouseenter="homeStore.mouseEnter"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, watchEffect } from 'vue'
import { useHomeStore } from '@/store/Home'

const homeStore = useHomeStore()
const { currentSectionsSong, durationSong } = storeToRefs(homeStore)

const sectionSong = (e: Event) => {
  const target = e.target as HTMLInputElement
  homeStore.setCurrentSection(+target.value)
}

const runnable = ref('0%')

watchEffect(() => {
  const percentaje =
    (homeStore.currentSectionsSong * 100) / homeStore.durationSong
  if (!isNaN(percentaje)) {
    runnable.value = `${Math.round(percentaje)}%`
  }
})
</script>

<style lang="scss" scoped>
.songSlider {
  -webkit-appearance: none;
  width: 280px;
  height: 24px;
  padding: 16px 10px;
  border-radius: 20px;
  margin-bottom: 2rem;
  background: variables.$background-color;
  box-shadow: 8px 8px 14px variables.$shadow-color;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: transparent;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
    box-shadow: none;
    border-radius: 20px;
    transition: background 0.3s ease-in-out;
    background: linear-gradient(
      165deg,
      variables.$primary-color,
      variables.$secondary-color
    );
    background-size: v-bind(runnable);
    background-repeat: no-repeat;
  }
}
</style>
