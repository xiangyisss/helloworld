<template>
  <div>
    <h1>
      Events Listing
      <EventCard />
      <BaseIcon />
    </h1>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";

export default {
  components: {
    EventCard
  }
};
</script>
