<template>
  <div class="card-news">
    <Headline v-bind:headline='cards[0]'/>
    <NerLists v-bind:ners_group="cards.map(card => card.ners)"/>
    <Events v-bind:events="cards" v-bind:n_cards="5"/>
    <router-link @click.native="$scrollToTop" :to="{name: 'Timeline', params: {topic: this.getTopic, cards: this.cards}}" tag="button">Timeline</router-link>
  </div>
</template>

<script>
import NerLists from './NerLists';
import Events from './Events.vue';
import Headline from './Headline.vue';

export default {
  name: 'CardNews',
  components: {
    NerLists,
    Events,
    Headline
  },
  props:['key_card','cards'],
  methods: {
     compare: function(a,b){
      if ( a.last_nom < b.last_nom ){
        return -1;
      }
      if ( a.last_nom > b.last_nom ){
        return 1;
      }
      return 0; 
    },
    onTimeline: function(){
      console.log({"router": this.$router})
      this.$router.push('/Timeline')
    }
  },
  computed: {
    mostNers: function(){
      console.log(this.card)
      let ners = this.card.ners
      let counts = {};

      for (let i = 0; i < ners.length; i++)
        counts[ners[i]] = (counts[ners[i]] + 1) || 1;

      counts.sort(this.compare);
      console.log(counts)
      return counts
    },
    getTopic: function(){
      let topic = this.cards[0]['topic'];
      return topic
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .card-news{
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1em 0;
    border-radius: 10px;
    gap: 1.2em;
    /* width: 34.375em; */
    box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
    transition: box-shadow 0.25s ease, transform 0.25s ease;
  }

  .card-news:hover{
    box-shadow: 0 6px 15px rgba(36, 37, 38, 0.24);
    transform: translateY(-2px) translateZ(0) translateX(0) scale(1.005);
  }

  .card-news button{
    /* padding: 0.4em 1.2em; */
    color: white;
    border: none;
    padding: 0.2em;
    font-size: 1.875em;
    width: 6.566666666666666em;
    height: 2.033333333333333em;
    align-self: center;
    background: linear-gradient(94.14deg, #0037FC 1.66%, #0074FC 96.76%);
    box-shadow: 0px 3px 20px rgba(0, 161, 252, 0.49);
    border-radius: 10px;
  }
</style>
