<template>
  <div class="signup">
      <h1>Sign up</h1>
      <form @submit="onSubmit">
            <label for='username'>Username</label>
            <input type="text" name="username" v-model="username"/>
            <span ref='username_err'></span>
            <label for='email'>Email</label>
            <input type="email" name="email" v-model="email"/>
            <span ref='email_err'></span>
            <label for ="password">Password</label>
            <input type="password" name="password" v-model="password"/>
            <span ref='password_err'></span>
            <button>Sign up</button>
      </form>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Signup',
    data(){
        return{
            username: '',
            email: '',
            password: ''
        }
    },
    computed: mapGetters(["getUser"]),
    methods: {
        ...mapActions(["signupPost"]),
        async onSubmit(e){
            e.preventDefault();
            let user = {
                username: this.username,
                email: this.email,
                password: this.password
            }

            await this.signupPost(user);

            user = this.getUser;
            
            
            this.$refs.username_err.innerHTML = '';
            this.$refs.email_err.innerHTML = '';
            this.$refs.password_err.innerHTML = '';

            if(user.errors){
                if(user.errors.username){
                    this.$refs.username_err.innerHTML = user.errors.username;
                    this.username = '';
                }
                if(user.errors.email){
                    this.$refs.email_err.innerHTML = user.errors.email;
                    this.email = '';
                }
                if(user.errors.password){
                    this.$refs.password_err.innerHTML = user.errors.password;
                    this.password = '';
                }
            }else{
                this.$router.push('/')
            }
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .signup{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
            font-size: 3.5em;
            margin-bottom: 0.5em;
        }

        form{
            width: 50%;
            display: flex;
            flex-direction: column;

            label{
                font-size: 1.5em;
                padding: 0.1em;
                margin-top: 1em;
            }

            input{
                font-size: 1.5em;
                padding-left: 0.5em;
                // width: 2em;
                height: 2em;;
                border-radius: 5px;
                
                outline: none;
                border: rgb(170, 170, 170) 1px solid;

                &:hover{
                    height: calc(2em - 1.5px);
                    border: black 1.5px solid;
                }
                &:focus{
                    height: calc(2em - 2px);
                    border: blue 2px solid;
                }

                
            }

            button{
                align-self: center;
                font-size: 1.5em;
                padding: 0.5em;
                background: blue;
                color: white;
                margin: 1em;
                width: 5em;
            }

            span{
                    margin-bottom: 1em;
                    color: red;
                }
        }
    }
</style>
