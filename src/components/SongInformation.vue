<template>
  <div class="songInformation">
    <img
      :alt="song.nombre"
      :src="song.portada"
      class="songInformation__image"
    />
    <p class="songInformation__name">{{ song.nombre }}</p>
    <p class="songInformation__artist">{{ song.artista }}</p>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Song } from '@/interfaces/Song'

defineProps({
  song: {
    type: Object as PropType<Song>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.songInformation {
  display: flex;
  margin-bottom: 2vw;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    margin-bottom: 1rem;
  }

  &__image {
    max-width: 280px;
    margin-bottom: 2rem;

    @media screen and (max-width: 1200px) {
      margin-bottom: 1rem;
    }
  }

  &__name {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  &__artist {
    font-size: 1.5rem;

    @media screen and (max-width: 1200px) {
      font-size: 1rem;
    }
  }
}
</style>
