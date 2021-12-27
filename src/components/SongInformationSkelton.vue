<template>
  <div class="songInformationSkeleton">
    <div class="songInformationSkeleton__image"></div>
    <div class="songInformationSkeleton__name"></div>
    <div class="songInformationSkeleton__artist"></div>
  </div>
</template>

<style lang="scss" scoped>
.songInformationSkeleton {
  display: flex;
  margin-bottom: 2vw;
  align-items: center;
  flex-direction: column;
  animation: loading 1s steps(10, end) infinite alternate;

  @media screen and (max-width: 1200px) {
    margin-bottom: 1rem;
  }

  &__image,
  &__name,
  &__artist {
    background-color: variables.$shadow-color;
  }

  &__image {
    width: 280px;
    height: 280px;
    margin-bottom: 2rem;

    @media screen and (max-width: 1200px) {
      margin-bottom: 1rem;
    }
  }

  &__name {
    width: 350px;
    height: 32px;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 1200px) {
      width: 280px;
      height: 26px;
    }
  }

  &__artist {
    width: 150px;
    height: 32px;

    @media screen and (max-width: 1200px) {
      width: 100px;
      height: 20px;
    }
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
