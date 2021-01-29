<template>
    <ul class='event-lists'>
        <li v-bind:key="event.id" v-for="event in events.slice(0,this.n_cards_computed)">
            <div class="circle">

            </div>
            <div class="event-list">
                <span class="publish-date">Publish Date: {{event.publish_date}}</span>
                <!-- <span>{{event.title}}</span> -->
                <a v-bind:href="event.url" target="_blank">{{event.title}}</a>
            </div>
            
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Events',
    props: ['events','n_cards'],
    computed:{
        n_cards_computed: function(){
            if(this.n_cards){
                return parseInt(this.n_cards);
            }else{
                return 100;
            }
        }
    }
}
</script>

<style>
    .event-lists{
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 0;
        list-style: none;
        margin: 0 1em;
    }

    .event-lists li{
        display: flex;
        margin: 0.2em;
        /* flex-wrap: wrap; */
        /* gap: 2em; */
    }

    .event-lists span{
        display: flex;
        /* width: 22em; */
        flex-wrap: wrap;
    }

    .publish-date{
        color: #0037FC;
        font-size: 0.8em;
    }

    .event-list{
        font-size: 1.25em;
        display: flex;
        flex-direction: column;
        margin-left: 40px;
    }

    .circle{
        height: 25px;
        width: 25px;
        background-color: #0037FC;
        border-radius: 50%;
        margin-top: 0.5em;
        position: absolute;
        z-index: 2;
        box-shadow: 0px 6px 25px -6px #0037FC;
    }
</style>