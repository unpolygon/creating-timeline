<template>
  <div class="login">
      <h1>Login</h1>
      <form @submit="onSubmit">
            <label for='email'>Email</label>
            <input type="email" name="email" v-model="email"/>
            <span ref='email_err'></span>
            <label for ="password">Password</label>
            <input type="password" name="password" v-model="password"/>
            <span ref='password_err'></span>
            <button>Login</button>
      </form>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    computed: mapGetters(["getUser"]),
    methods:{
        ...mapActions(["loginPost"]),
        async onSubmit(e){
            e.preventDefault();
            let user = {
                email: this.email,
                password: this.password
            }
            await this.loginPost(user);

            user = this.getUser;

            this.$refs.email_err.innerHTML = '';
            this.$refs.password_err.innerHTML = '';

            if(user.errors){
                if(user.errors.email){
                    this.$refs.email_err.innerHTML = user.errors.email;
                    this.email = '';
                    this.password = '';
                }

                if(user.errors.password){
                    this.$refs.password_err.innerHTML = user.errors.password;
                    this.password = '';
                }
            }else{
                this.$router.push('/')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .login{
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
