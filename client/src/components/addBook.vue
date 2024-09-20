<script setup>
import { ref } from "vue";
const name = ref("");
const author = ref("");
const status = ref("");

const addBook = async () => {
  try {
    const response = await fetch("http://localhost:3000/newBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value, // Utiliser .value pour les variables ref
        author: author.value,
        status: status.value,
      }),
    });

    // Gérer la réponse
    const result = await response.json();

    // Vérifier si l'ajout a été un succès
    if (response.ok) {
      alert("Livre ajouté avec succès!");
      // Réinitialiser les champs du formulaire
      name.value = "";
      author.value = "";
      status.value = "";
    } else {
      throw new Error(result.message || "Erreur lors de l'ajout du livre");
    }
  } catch (error) {
    alert(
      "Une erreur s'est produite lors de l'ajout du livre: " + error.message
    );
  }
};

const checkForm = async (e) => {
  e.preventDefault();
  await addBook();
};
</script>

<template>
  <div id="app">
    <h2>Ajouter un livre</h2>
    <form @submit="checkForm" method="post">
      <div className="form-item">
        <label for="name">Nom du livre</label>
        <input v-model="name" type="text" name="name" required />
      </div>

      <div className="form-item">
        <label for="author">Auteur</label>
        <input v-model="author" type="text" name="name" />
      </div>
      <div className="form-item">
        <label for="status">Status</label>
        <select v-model="status" name="status" required>
          <option value="" disabled>Choisissez le statut</option>
          <option value="lu">Lu</option>
          <option value="à lire">À lire</option>
        </select>
      </div>

      <p>
        <input type="submit" value="Enregistrer" />
      </p>
    </form>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
}

form {
  border-radius: 0.2rem;
  padding: 0.5rem;
}
.form-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
