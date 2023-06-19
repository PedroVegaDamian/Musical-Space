<script setup lang="ts">
const { icon } = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '1.5rem'
  },
  marginX: {
    type: String,
    default: '1rem'
  }
})

const path = `/images/${icon}.png`
</script>

<template>
  <button class="buttonPlayer">
    <img class="buttonPlayer__icon" :src="path" :alt="icon" />
  </button>
</template>

<style lang="scss" scoped>
.buttonPlayer {
  display: flex;
  border-radius: 50%;
  align-items: center;
  padding: v-bind(size);
  justify-content: center;
  margin-left: v-bind(marginX);
  margin-right: v-bind(marginX);
  box-shadow: 8px 8px 14px variables.$shadow-color;

  @media screen and (max-width: 1200px) {
    padding: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  &__icon {
    width: v-bind(size);
    height: v-bind(size);

    @media screen and (max-width: 1200px) {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
