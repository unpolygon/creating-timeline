<template>
  <div class="top-stories">
    <h2>Top stories</h2>
    <TopStoriesCard v-for="event in events" v-bind:key="event[0].topic" v-bind:event="event"/>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import TopStoriesCard from './TopStoriesCard.vue'
export default {
    components: { TopStoriesCard },
    name: "TopStories",
    computed: {
        ...mapGetters(["cardByTopic"]),

        events: function(){
        let cards = this.cardByTopic
        let value_cards = Object.values(cards).slice(0,3)
        return value_cards
    }
  }
    
}
</script>

<style scoped>
.top-stories{
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
}

h2{
    font-size: 4em;
    font-weight: 400;
    margin: 0.25em;
    font-weight: 200;
}

.top-stories-card{
    background: #FFFFFF;
    box-shadow: 0px 16px 75px -6px rgba(0, 0, 0, 0.03);
    border-radius: 34px;
    width: 80%;
}
</style>