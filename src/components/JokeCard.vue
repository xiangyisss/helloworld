<template>
  <div class="question">
    <h4 @click="show(jokeId)">Quesiton: {{ joke.setup }}</h4>
    <p :id="jokeId" hidden="true">Punchline: {{ joke.punchline }}</p>
  </div>
</template>

<script>
export default {
  name: "JokeCard",
  props: {
    joke: Object,
    jokeId: Number
  },
  methods: {
    show(id) {
      let myData = document.getElementById(id);
      myData.hidden = false;
    }
  }
};
</script>

<style scoped>
h4 {
  cursor: pointer;
}
</style>
