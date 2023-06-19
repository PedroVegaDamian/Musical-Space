<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/store/Home'

const { loadSongs } = useHomeStore()
loadSongs()
</script>

<style lang="scss">
@use './scss/index.scss';
</style>
