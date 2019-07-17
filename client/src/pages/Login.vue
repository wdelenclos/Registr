<template>
  <main-layout>
    <div class="container">
        <div class="row justify-content-md-center">
        <div class="card p-4 mt-4 w-50 align-center">
        <h1 class="mt-2 h2 text-center">Sign in to your account</h1>
          <div class="alert alert-danger mt-4" v-if="errorMessage !==''" role="alert">
                {{errorMessage}}
           </div>
                <div class="form-group mt-4">
                    <label for="email">Email address</label>
                    <input type="email" required="true" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                </div>
                <button class="btn btn-primary w-100 mt-4" v-on:click="login">{{cta}}</button>
            
            <a class="mt-4 text-center" href="/register">I don't have an account yet</a>
        </div>
        </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    },
    data(){
        return{
            cta : 'Login',
            email: '',
            password: '',
            errorMessage:'',
            message: ''
        }
    },
    created: function(){
       
    },
    methods: {
            login() {
                this.cta = "Logging  ...";
                let  vm = this;
                let date = new Date();
                console.log({email: this.email, password: this.password, last_login: date});
                fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: this.email, password: this.password})
                })
                .then(res => res.json())
                .then((res) => {
                    if(res.error != undefined){
                        this.$notify({
                            group: 'foo',
                            title: 'Invalid credential',
                            text: "Try another email or password",
                            type: 'error'
                        });
                        vm.cta = "Login"
                    }
                    else {
                        window.localStorage.setItem('RegistrUser', JSON.stringify({token: res.auth_token, email: this.email, last_login: date}));
                        window.location = "/dashboard"
                    }
                })
                    .catch(function(error) {
                        this.$notify({
                            group: 'foo',
                            title: 'Internal server error',
                            text: "Try again later",
                            type: 'error'
                        });
                        vm.cta = "Login";
                    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
                    });
            }
    }
  }

</script>
