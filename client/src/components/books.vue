<script setup>
import DeleteButton from "./deleteBook.vue";
defineProps({
  books: Array,
});
</script>

<template>
  <div id="app">
    <h2>Liste des Livres</h2>
    <div v-if="books.length">
      <ul>
        <li v-for="book in books">
          <strong>{{ book.name }}</strong>
          <div className="status">
            <span id="button">Auteur</span>

            <p>{{ book.author }}</p>
          </div>
          <div className="status">
            <span id="button">Status</span>
            <p>{{ book.status }}</p>
          </div>
          <DeleteButton :bookId="book._id" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Aucun livre disponible.</p>
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
.status {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
p {
  margin: 0;
}

li {
  width: 250px;
  background: rgba(249, 249, 249, 0.7);
  color: black;
  padding: 1rem;
  margin-bottom: 10px;
  border-radius: 5px;
}
#button {
  background-color: rgba(49, 85, 193, 0.16);
  padding: 0 0.3rem;
  border-radius: 0.3rem;
  color: rgb(49, 85, 193);
  font-weight: 600;
}
</style>
