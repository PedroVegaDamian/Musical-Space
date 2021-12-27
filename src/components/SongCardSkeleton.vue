<template>
  <div class="songCardSkeleton">
    <div class="songCardSkeleton__thumbnail"></div>
    <div class="songCardSkeleton__info">
      <div class="songCardSkeleton__name"></div>
      <div class="songCardSkeleton__artist"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.songCardSkeleton {
  display: flex;
  padding: 1rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 8px 8px 14px variables.$shadow-color;
  animation: loading 1s steps(10, end) infinite alternate;

  &__name,
  &__artist,
  &__thumbnail {
    background-color: variables.$shadow-color;
  }

  &__thumbnail {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }

  &__info {
    width: 100%;
    display: flex;
    margin-left: 1rem;
    flex-direction: column;
    justify-content: space-evenly;
  }

  &__name {
    width: 240px;
    height: 24px;
  }

  &__artist {
    width: 100px;
    height: 20px;
  }

  @keyframes loading {
    from {
      opacity: 0.3;
    }

    to {
      opacity: 1;
    }
  }
}
</style>
