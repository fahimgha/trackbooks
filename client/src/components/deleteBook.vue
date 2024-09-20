<script setup>
// import { ObjectId } from "mongodb";
const props = defineProps({
  bookId: String,
});
const handleClick = async () => {
  console.log("Le bouton a été cliqué pour le livre avec l'ID:", props.bookId);

  try {
    const response = await fetch(
      `http://localhost:3000/deleteBook/${props.bookId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log("Livre supprimé avec succès");
      // Vous pouvez ajouter une logique pour actualiser la liste des livres ici
    } else {
      console.error("Erreur lors de la suppression du livre");
    }
  } catch (error) {
    console.error("Erreur lors de la requête DELETE:", error);
  }
};
</script>

<template>
  <button @click="handleClick">Supprimer</button>
</template>
