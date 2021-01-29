<template>
  <div class="card-news timeline-lists">
    <Events v-bind:events="cards"/>
  </div>
</template>

<script>
import Events from './Events.vue';
export default {
  components: { Events },
    name: 'TimelineLists',
    props: ['cards']
};
</script>

<style>
.timeline-lists{
    justify-self: center;
    align-self: center;
    width: 90vw;
    transition: none;
}

.timeline-lists:hover{
  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
  transform: inherit;
}

</style>