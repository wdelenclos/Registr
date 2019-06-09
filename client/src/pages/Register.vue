<template>
  <main-layout>
    <div class="container">
        <div class="row justify-content-md-center">
        <div class="card mt-4 p-4 w-50 align-center">
        <h1 class="mt-2 h2 text-center">Create your account</h1>
       
            <div class="form-group mt-4">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" v-bind="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" v-bind="password" id="password" placeholder="Password">
            </div>

            <button class="btn btn-primary w-100 mt-4" v-on:click="register">{{cta}}</button>

            <a class="mt-4 text-center" href="/login">I already have an account</a>
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
            cta : 'Create now',
            email: '',
            password: ''
        }
    },
   methods: {
            register() {
                this.cta = "Register  ...";
                fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: this.email, password: this.password})
                }).then((res) => {
                    console.log(res);
                })
                    .catch(function(error) {
                    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
                    });
            }
    }
  }
</script>
