<script setup></script>

<template>
  <nav>
    <router-link to="/">Liste des Livres</router-link>

    <router-link to="/addBook">Ajouter un Livre</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}
</style>
