<template>
  <main-layout>
    <!-- Begin Site Title
================================================== -->
<div class="container">
    <div class="mainheading">
        <h1 class="sitetitle">The team intelligence library</h1>
        <p class="lead">
            Registr is a smart posts aggregator and library for your team.
        </p>
        <form v-if="!logged" class="form-inline my-2 my-lg-0 mt-3">
            <input class="form-control mr-sm-2" type="text" placeholder="Enter your email">
            <a href="#" class="btn subscribe">Let's started</a>
        </form>
        <v-link v-if="logged" class="btn subscribe" href="/dashboard">Go to dashboard</v-link>
        <img class="heroLead" src="assets/img/hero.svg">
    </div>
    <!-- End Site Title
    ================================================== -->
</div>
<!-- Begin Featured
================================================== -->
<section class="home-featured mt-5 pt-5 pb-5">
    <div class="container mt-5">
        <h3 class="text-center">Your collaborative intelligence</h3>
        <p class="text-center">Business intelligence, brain-Food articles, design strategy: build a shared knowledge base with no efforts.</p>
        <hr class="mt-5"/>
        <div class="row">
            <div class="col-lg-4 mt-5">
                <img class="text-center" src="/assets/img/step1.svg" height="104px" alt="">
                <h4 class="mt-4">Collect & aggregate content</h4>
                <p>Collect and paste the links of articles that makes sense in a single place for your team easily.</p>
            </div>
            <div class="col-lg-4 mt-5">
                <img src="/assets/img/step2.svg" height="104px" alt="">
                <h4 class="mt-4">Organise like you need</h4>
                <p>Build shared intelligence in Registr happens in tags, organised by project, topic, team or whatever makes sense for you.</p>
            </div>
            <div class="col-lg-4 mt-5">
                <img class="text-center" src="/assets/img/step3.svg" height="104px" alt="">
                <h4 class="mt-4">Get related content smartly</h4>
                <p>Registr grab for you related related content on the web to propose high value content, your are free to add it in you library !</p>
            </div>
        </div>
    </div>
</section>
<!-- End Featured
================================================== -->

<section class=" mt-5 pt-5 pb-5">
    <div class="container mt-5">
        <h3 class="text-center">They are smart like you</h3>
        <p class="text-center">A lot of team around the world have already made Registr the place where their intelligence is.</p>
        <div class="row">
            <div class="col-lg-4 mt-5 align-items-center">
                <blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">&quot;Simplicity is the ultimate competitive weapon&quot; Ken Segall<a href="https://t.co/3hrjBWfsmz">https://t.co/3hrjBWfsmz</a></p>&mdash; Wladimir Delenclos (@WDelenclos) <a href="https://twitter.com/WDelenclos/status/1050707735690457088?ref_src=twsrc%5Etfw">12 octobre 2018</a></blockquote>

            </div>
            <div class="col-lg-4 mt-5 align-items-center">
                <blockquote class="twitter-tweet"><p lang="fr" dir="ltr">Une histoire qui s&#39;écrit <a href="https://twitter.com/hashtag/ParisEstMagique?src=hash&amp;ref_src=twsrc%5Etfw">#ParisEstMagique</a> <a href="https://twitter.com/hashtag/CFCPSG?src=hash&amp;ref_src=twsrc%5Etfw">#CFCPSG</a></p>&mdash; Dylan Settbon (@DSettbon) <a href="https://twitter.com/DSettbon/status/575798276827574272?ref_src=twsrc%5Etfw">March 11, 2015</a></blockquote>
            </div>
            <div class="col-lg-4 mt-5 align-items-center">
                <blockquote class="twitter-tweet"><p lang="fr" dir="ltr">Ah mais voilà enfin un peu de créativité ! <a href="https://t.co/O7MaC3wgT2">https://t.co/O7MaC3wgT2</a></p>&mdash; Jérôme de Verdière (@jdverdiere) <a href="https://twitter.com/jdverdiere/status/1151184901787529223?ref_src=twsrc%5Etfw">July 16, 2019</a></blockquote>

            </div>

        </div>
    </div>
</section>
  </main-layout>
</template>
<style>
    .subscribe{
        transition-duration: .2s;
        color: #FFF!important
    }
</style>
<script>
  import MainLayout from '../layouts/Main.vue'
  import VLink from '../components/VLink.vue'

  export default {
    components: {
        VLink,
      MainLayout
    },
      computed:{
          logged() {
              let token = window.localStorage.getItem('RegistrUser');
              console.log(token);
              if(token !== null ){
                  return true
              }else{
                  return false;
              }
          },
      }
  }
</script>
