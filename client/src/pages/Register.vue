<template>
  <main-layout>
    <div class="container">
        <div class="row justify-content-md-center">
        <div class="card p-4 w-50 align-center">
        <h1 class="mt-2 h2 text-center">Create your account</h1>
        <form>
            <div class="form-group mt-4">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

            <button type="submit" class="btn btn-primary w-100 mt-4">Create now !</button>
        </form>
            <a class="mt-4 text-center" href="/register">I already have an account yet</a>
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
    }
  }
</script>
