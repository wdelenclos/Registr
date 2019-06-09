<template>
  <main-layout>
     <!-- Begin Site Title
================================================== -->
<div class="container">
    <div class="mainheading">
        <h1 class="sitetitle">Oups ...</h1>
        <p class="lead">
           It's seems that your content is not here, it's a 404 error ...
        </p>
        <v-link href="/"><button class="btn subscribe">Back to home</button> </v-link>

        <img class="hero404" src="assets/img/step3.svg">
    </div>
    <!-- End Site Title
    ================================================== -->
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

<style scoped>
.hero404 {
  opacity: 0.9;
    z-index: -1;
    position: absolute;
    width: 25%;
    right: 0;
    top: 56px;
}

</style>
