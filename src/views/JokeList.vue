<template>
  <div>
    <h3>Showing the jokes</h3>

    <joke-card
      class="jokelists"
      v-for="joke in jokes"
      :key="joke.id"
      :joke="joke"
      :jokeId="joke.id"
    ></joke-card>
  </div>
</template>

<script>
import axios from "axios";
import JokeCard from "../components/JokeCard.vue";
export default {
  components: { JokeCard },
  name: "JokeList",
  data() {
    return {
      jokes: null
    };
  },
  created() {
    axios
      .get("https://official-joke-api.appspot.com/jokes/ten")
      .then(res => (this.jokes = res.data))
      .catch(err => console.log(err));
  }
};
</script>
