<template>
    <div class="Homepage">
        <TimelineLists :cards='this.cards'/>
        <img src="../assets/graph.png"/>
        <!-- <EventEvolution /> -->
    </div>
</template>

<script>
import TimelineLists from '../components/TimelineLists.vue';
// import EventEvolution from '../components/EventEvolution.vue';

export default {
    name: 'Timeline',
    components: {
        TimelineLists,
        // EventEvolution
    },
    created(){
        console.log(this.$route.params)
    },
    computed:{
        cards: function(){
            let cards = this.$route.params.cards
            return cards
        }
    }
}
</script>

<style>
img {
    width: auto;
    max-width: 70%;
    height: 200%;
    margin: 5em auto;
    transform: scale(1.1);
    align-self: center;
}
</style>