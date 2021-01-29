<template>
  <div class="top-stories-card">
    <div class="title">
      <h3>{{event[0].title}}</h3>
      <span>Publish Date: {{event[0].publish_date}}</span>
    </div>


    <NerLists v-bind:ners_group="event.map(card => card.ners)"/>

    <Events  v-bind:events="event" v-bind:n_cards="5" />

    <router-link @click.native="$scrollToTop" :to="{name: 'Timeline', params: {topic: event[0].topic, cards: event}}" tag="button">Timeline</router-link>

  </div>
</template>

<script>

import Events from "./Events.vue";
import NerLists from "./NerLists.vue";

export default {
  components: { Events, NerLists },
  name: "TopStoriesCard",
    props: ['event']
};
</script>

<style scoped>

.top-stories-card{
    margin: 1em;
    padding: 2em 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.top-stories-card:hover{
    box-shadow: 0 6px 15px rgba(163, 163, 163, 0.24);
    transform: translateY(-1px) translateZ(0) translateX(0) scale(1.005);
}

.title h3{
    margin: 0;
    padding: 0;
}

.title span{
    color: #0037FC;
    font-size: 0.8em;
}

button{
    color: white;
    padding: 0.2em;
    font-size: 1.875em;
    width: 6.566666666666666em;
    height: 2.033333333333333em;
    align-self: center;
    background: linear-gradient(94.14deg, #0037FC 1.66%, #0074FC 96.76%);
    box-shadow: 0px 3px 20px rgba(0, 161, 252, 0.49);
    border-radius: 10px;
    margin-top: 0.6em;
}
</style>