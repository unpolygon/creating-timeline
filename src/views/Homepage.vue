<template>
  <div class="Homepage">
    <h1 v-if="!this.allEventCard.length">
      Loading ...
    </h1>
  <div v-if="this.allEventCard.length" class="Homepage">

    <TopStories class="TopStories"/>

    <h2 id='#more'> More Stories </h2>
    <div class="show-cards">
      
      <CardNews
        v-for="card in cards"
        v-bind:key="Object.keys(card)[0]"
        v-bind:key_card="Object.keys(card)[0]"
        v-bind:cards="Object.values(card)[0]"
      />
    </div>
  </div>

    <!-- <div class="column-left">
      <CardNews
        v-for="card in column_left"
        v-bind:key="Object.keys(card)[0]"
        v-bind:key_card="Object.keys(card)[0]"
        v-bind:cards="Object.values(card)[0]"
      />
    </div>

    <div class="column-right">
      <CardNews
        v-for="card in column_right"
        v-bind:key="Object.keys(card)[0]"
        v-bind:key_card="Object.keys(card)[0]"
        v-bind:cards="Object.values(card)[0]"
      />
    </div> -->
  </div>
</template>

<script>
import CardNews from "@/components/CardNews.vue";

import TopStories from '../components/TopStories.vue';

import {mapActions, mapGetters} from 'vuex';

export default {
  name: "Homepage",
  components: {
    CardNews,
    TopStories
  },
  data() {
    return {
      column_left: [],
      column_right: [],
      cards: []
    };
  },
  methods: {
    ...mapActions(["fetchEventCard"]),

    splitLeftRight: function (obj) {

      for (const [key, value] of Object.entries(obj)) {
        this.column_left.push({ [key]: value });
        this.cards.push({[key] : value})
      }

      let len = this.column_left.length;
      this.column_right = this.column_left.splice(0, len / 2);

      // console.log("cards:", this.column_left);
      console.log("column_left:", this.column_left);
      console.log("column_right:", this.column_right);
    },

    splitByTopic: function () {
      let event_card = this.allEventCard;
      let topic_card = {};

      for (let i = 0; i < event_card.length; i++) {
        let topic = event_card[i].topic;

        if (!topic_card[topic]) {
          topic_card[topic] = new Array();
        }

        topic_card[topic].push(event_card[i]);
      }

      console.log("topic_card:", topic_card);
      this.splitLeftRight(topic_card);
    },
  },
  created() {
    this.fetchEventCard();
    // this.splitByTopic();
    this.splitByTopic();
  },
  computed: {
    ...mapGetters(["allEventCard"]),
  },
  watch: {
    allEventCard: function () {
      this.splitByTopic();
    },
  },
};
</script>

<style lang="scss" scoped>
.Homepage {
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-content: center;
  justify-content: center;

  > h1{  
    align-self: center;
    font-size: 5em;
  }
}


h2{
  align-self: center;
  justify-self: center;
  font-size: 3.5em;
  font-weight: 400;
}

.show-cards {
  column-count: 2;
  column-gap: 4%;
  column-width: 40%;
  padding: 1em;
}

.show-cards > div{
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid; /* Firefox is dumb */
  break-inside: avoid;
  margin: 2em 0;
}

.show-cards > div:first-child{
  margin: 0 0;
}

/* .column-left,
.column-right {
  display: flex;
  flex-direction: column;
  gap: 2em;
} */
</style>
