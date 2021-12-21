<template>
  <div class="page404">
    <h1 class="page404__title">Página no encontrada</h1>
    <h2 class="page404__subtitle">
      Por favor, haz click <router-link to="/">aquí</router-link> para volver al
      inicio.
    </h2>
    <router-link to="/">
      <img class="page404__logo" src="/images/logo.png" alt="logo" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.page404 {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &__logo {
    max-width: 150px;
  }

  &__title,
  &__subtitle {
    color: #303030;
    text-align: center;
  }

  &__title {
    font-size: 3rem;
    margin-bottom: 0.8rem;

    @media screen and (max-width: 780px) {
      font-size: 2.5rem;
    }
  }

  &__subtitle {
    font-size: 1.8rem;
    margin-bottom: 3.2rem;

    @media screen and (max-width: 780px) {
      font-size: 1.3rem;
    }
  }
}
</style>
