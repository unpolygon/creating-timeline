<template>
  <div class="info" id='info'>
      <div class="info-content">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Adipisci cum earum fuga beatae, voluptates, aperiam
        reprehenderit tenetur quia facilis ab in. 
        Quos architecto quod eos harum fugit eaque, eum consequuntur?
        </p>
        <img src="../assets/home.png" />
        <img src="../assets/timeline.png" />
        <img src="../assets/event.png" />
      </div>
    <button @click='closeInfo'>X</button>
  </div>
</template>

<script>
export default {
    name: "Info",
    methods: {
        "closeInfo": function(){
            var Info = document.getElementById('info');
            Info.classList.remove('active');
        }
    }
}
</script>

<style scoped>
    .info{
        
        /* border-radius: 34px; */
        font-size: 0.5em;
        position: fixed;
        width: 80vw;
        height: 80vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
        border: 0.3em solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
        padding: 1em;
        box-shadow: 0 5px 40px rgba(0, 0, 0, .30);
        background: #fff;
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
        z-index: 4;
    }

    .info.active{
        visibility: visible;
        opacity: 1;
        transition: 0.5s;
    }

    .info-content{
        /* position: relative; */
        overflow: auto;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
        margin: 0;
    }

    img{
        margin: 0;
        width: 60%;
        height: auto;
    }

    button{
        color: white;
        padding: 1em;
        background: red;
        border-radius: 50%;
        position: fixed;
        top: 1%;
        right: 1%;
    }
</style>