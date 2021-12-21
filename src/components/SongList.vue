<template>
  <div class="songList">
    <div class="songList__wrapper">
      <SongCard v-for="song of songs" :key="song.id" :song="song" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Song } from 'interfaces/Song'
import SongCard from 'components/SongCard.vue'

defineProps({
  songs: {
    type: Object as PropType<Song[]>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.songList {
  gap: 1rem;
  width: 40%;
  height: 100%;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  flex-direction: column;
  background-color: variables.$background-color;

  @media screen and (max-width: 1200px) {
    display: none;
  }

  &__wrapper {
    padding-left: 2rem;
    padding-right: 2rem;
    overflow: hidden auto;
  }
}
</style>
