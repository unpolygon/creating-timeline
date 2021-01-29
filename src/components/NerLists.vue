<template>
   <ul class='ner-lists'>
      <li v-bind:key="ner.id" v-for="ner in mergeNers">{{ner}}</li>
    </ul>
</template>

<script>
export default {
    name: 'NerLists',
    props: ['ners_group'],
    computed:{
      mergeNers: function() {
        // let ners = this.ners_group
        let arr = []
        this.ners_group.forEach(ners => ners.forEach(ner => arr.push(ner)))
        // console.log("arr:",arr)
        return arr.slice(0,5)
      }
    }
}
</script>

<style scoped>
  .ner-lists{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 1em;
    background: #EDF1FF;
    padding: 1em;
  }

  .ner-lists > li{
    font-size: 1.25em;
    background-color: #FFFFFF;
    color: #0037FC;
    padding: 0.4em 1.2em;
    border-radius: 13px;
  }
</style>