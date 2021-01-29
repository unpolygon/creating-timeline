<template>
  <div class="headline">
    <span class="title">
        {{headline.title}}
    </span>
    <span class="publish_date">
        Publish Date: {{headline.publish_date}}
    </span>
  </div>
</template>

<script>
export default {
    name: 'Headline',
    props: ['headline']
}
</script>

<style>
    .headline{
        display: flex;
        flex-direction: column;
        font-size: 1.25em;
        margin: 0 1em;
        gap: 0.2em;
    }

    .title{
        font-size: 1.5em;
        font-weight: 400;
    }

    .publish_date{
        font-size: 0.8em;
        color: #0037FC;
    }
</style>