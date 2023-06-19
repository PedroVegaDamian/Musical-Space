<template>
  <div class="songCard" @click="playNewSong(song)">
    <img class="songCard__thumbnail" :src="song.portada" :alt="song.nombre" />
    <div class="songCard__info">
      <p class="songCard__name">{{ song.nombre }}</p>
      <p class="songCard__artist">{{ song.artista }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Song } from '@/interfaces/Song'
import { useHomeStore } from '@/store/Home'

defineProps({
  song: {
    type: Object as PropType<Song>,
    required: true
  }
})

const { playNewSong } = useHomeStore()
</script>

<style lang="scss" scoped>
.songCard {
  display: flex;
  padding: 1rem;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 8px 8px 14px variables.$shadow-color;

  &__thumbnail {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }

  &__info {
    display: flex;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: space-evenly;
    color: variables.$primary-color-text;
  }

  &__name {
    font-weight: 600;
    font-size: 1.3rem;
  }
}
</style>
