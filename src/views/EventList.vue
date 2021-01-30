<template>
  <div>
    <h1>
      Events Listing
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </h1>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .get("http://localhost:3000/events")
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  }
};
</script>
