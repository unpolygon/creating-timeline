<template>
  <div class="event-evolution">
      event-evolution
      <DateGraph />
      <EventGraph />
  </div>
</template>

<script>
import DateGraph from './DateGraph.vue'
import EventGraph from './EventGraph.vue'
export default {
  components: { EventGraph, DateGraph },

}
</script>

<style>

</style>