<script setup>
import { ref } from "vue";
import Books from "./books.vue";

const books = ref([]);

fetch("http://localhost:3000/getLibrary")
  .then((response) => response.json())
  .then((backendBooks) => {
    books.value = backendBooks;
    // console.log(backendBooks);
  });
</script>

<template>
  <div>
    <div className="app">
      <Books :books="books" />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  align-items: start;
  justify-content: center;
}
</style>
