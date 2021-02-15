<template>
  <div class="question">
    <h4 @click="show(jokeId)">Quesiton: {{ joke.setup }}</h4>
    <div>
      <p :id="jokeId" class="closed">Punchline: {{ joke.punchline }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JokeCard",
  props: {
    joke: Object,
    jokeId: Number
  },
  data() {
    return {
      isShowing: false,
      seen: false
    };
  },
  methods: {
    show(id) {
      let myData = document.getElementById(id);
      if (myData.classList == "closed") {
        myData.classList.add("opened");
      } else {
        myData.classList.remove("opened");
      }
    }
  }
};
</script>

<style scoped>
h4 {
  cursor: pointer;
}
.closed {
  display: none;
}
.opened {
  display: block;
}
</style>
