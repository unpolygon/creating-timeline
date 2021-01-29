<template>
    <nav class="header">
        <span>{{header_msg}}</span>
        <ul ref ='menu'>
            <li class='active'>
                <router-link @click.native="$scrollToTop" :to="{name: 'Homepage'}" tag="a" class="active">Home</router-link>
            </li>
            <li>
                <a class='info-button' @click="handleInfo">How to use</a>
            </li>
            <li v-show="!userExists">
                <router-link @click.native="$scrollToTop" :to="{name: 'Login'}" tag="a">Login</router-link>
            </li>
            <li v-show="!userExists">
                <router-link @click.native="$scrollToTop" :to="{name: 'Signup'}" tag="a" class="signup">Sign up</router-link>
            </li>
            <li v-show="userExists">
                <a class="signup" ref='username' 
                @mouseover="overUsername = true"
                @mouseleave="overUsername = false"
                @click="logout"
                >{{showUsername}}</a>
            </li>
        </ul>
        <Info id='info'/>
        <div class='burger' @click="clickBurger"  ref='burger'>
                <div class='line1'></div    >
                <div class='line2'></div>
                <div class='line3'></div>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Info from './Info.vue'
export default {
  components: { Info },
    name: 'Header',
    data() {
        return {
            header_msg: 'Recent Event',
            button_msg: 'Info',
            overUsername: false
        }
    },
    methods: {
        ...mapActions(["logoutGet","checkUser"]),
        'handleInfo': function(){
            var infoButton = document.getElementById('info');
            infoButton.classList.toggle('active');
        },
        'logout': async function(){
            await this.logoutGet();
            if (! this.getUser){
                console.log(this.$router);
                this.$router.push('/')
            }
        }
    },
    computed: {
        ...mapGetters(['getUser',]),
        userExists: function(){
            return this.getUser && ! this.getUser.errors;
        },
        showUsername: function(){
            if(this.userExists && ! this.overUsername){
                return 'Hi! ' + this.getUser.username.slice(0,10);
            }else{
                console.log(this.overUsername);
                return 'Logout'
            }
        }
    },
    mounted(){
        this.checkUser()
    }
        
}
</script>

<style lang='scss' scoped>
    .header{
        // margin: 0;
        // padding: 0;
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 3rem;
        background-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
        height: 2em;
        position: sticky;
        top: 0;
        // opacity: 0.8;
        z-index: 10000;
        margin-bottom: 1em;
        float: right;

        > span{
            margin-left: 1em;
        }
    }

    ul{
        margin: 0;
        margin-top: 0.3em;
        padding: 0;
        display: flex;
        list-style: none;
        position: relative;
        gap: 0.1em;

        > li {
            padding: 0.5em 0.6em;
            // background-color: blue;
            font-size: 0.5em;
            border: 2px solid rgba(0, 0, 0, 0);
            
            // border: 1.5px solid blue;
            // border-radius: 11px;
            // background-color: red;
            &:after{
                content:'';
                display: block;
                margin: 0 auto;
                width: 80%;
                padding-top: 0.3em;
                border-bottom: 3px solid rgba(0, 0, 0, 0);
                // transition: all 0.1s;
            }

            &:hover:after{
                border-bottom: 3px solid blue;
            }
            &.active a{
                color: blue;
                // border-bottom: 2px solid blue;
            }
            a{
                cursor: pointer;
                transition: all 0.5s ease-out;
            }
        }

        .signup {
            border-radius: 15px;
            color: white;
            padding: 0.5em;
            background: blue;
        }

        

    }

    .Burger{
        display: none;
        cursor: pointer;
        div{
            width: 1.5em;
            height: .169em;
            background-color: white;
            margin: .13em;
            transition: all 0.5s ease;
        }
    }

@media (max-width: 630px){
    .header{
        span{
            font-size: 0.7em;
        }
    }

    ul {
        display: none;
    }

     .burger{
            display: block;
            width: 1em;
            height: 1em;
            margin-right: .2em;
            background: blue;
            float: right;
            cursor: pointer;
            text-align: center;
            font-size: 1.2em;
            color: white;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
        }

        .toggle .line1{
            transform: rotate(-45deg) translate(-.3em,.3em);
        }
        .toggle .line2{
            opacity: 0;
        }
        .toggle .line3{
            transform: rotate(45deg) translate(-.3em,-.3em);
        }
}


    // .info-button {
    //     padding: 0.2em;
    //     font-size: 0.6em;
    // }

</style>