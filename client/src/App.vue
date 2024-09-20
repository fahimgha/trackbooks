<script setup>
import Books from "./components/books.vue";
import AddBook from "./components/addBook.vue";
import NavBar from "./components/navBar.vue";
import { ref } from "vue";

// const books = ref([]);

// fetch("http://localhost:3000/getLibrary")
//   .then((response) => response.json())
//   .then((backendBooks) => {
//     books.value = backendBooks;
//     // console.log(backendBooks);
//   });
</script>

<template>
  <div className="test">
    <h1>Track Books</h1>
    <div className="app">
      <NavBar />
      <!-- <Books :books="books" /> -->
      <!-- <AddBook /> -->
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
