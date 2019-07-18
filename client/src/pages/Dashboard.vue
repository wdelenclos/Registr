<template>
    <main-layout style="background-color: #fff; padding: 40px">
        <img src="/assets/img/bg.jpg"width="100%" style="position: absolute; top: 0; left: 0;">
        <div class="container">
            <div class="paster">
                <h3 class="sitetitle">Paste a content to save</h3>
                <p> It's a pleasure to see you, what do you want to save on you Registr today ?</p>
                <form class="form-inline my-2 my-lg-0 mt-3">
                    <input class="form-control mr-sm-2 input-paster" type="text" v-model="url" placeholder="http://url.com">
                    <select class="input-paster" v-model="selected">
                        <option v-for="collection in collections" v-bind:value="collection.id">
                            {{ collection.name }}
                        </option>
                    </select>
                    <a href="#" @click="registr" class="btn btn-primary">Add it</a>
                </form>
            </div>

            <section class="featured-posts card p-5">
                <div class="section-title">
                    <h2><span>Last saved</span></h2>
                </div>
                <div class="card-columns listfeaturedtag">

                    <!-- begin post -->
                    <div class="card" v-for="post in posts">
                        <div class="row">
                            <div class="col-md-5 wrapthumbnail">
                                <a :href="post.url" target="_blank">
                                    <div class="thumbnail" :style="post.image_style">
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-7">
                                <div class="card-block">
                                    <h2 class="card-title">  <a :href="post.url" target="_blank">{{post.title}}</a></h2>
                                    <h4 class="card-text">{{post.description}}</h4>
                                    <div class="metafooter">
                                        <div class="wrapfooter">
                                    <span class="meta-footer-thumb">
                                    </span>
                                            <span class="author-meta">
                                    <span class="post-date">{{post.created_at.slice(0, 10)}}</span><span class="dot"></span><span
                                                    class="post-read">{{post.collection}}</span>
                                    </span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end post -->

                </div>
            </section>
            <!-- End Featured
            ================================================== -->
        </div>
    </main-layout>
</template>
<style>
    .inline {
        font-size: 1rem;
        height: 42px;
        line-height: 1.25;
        color: #464a4c;
        width: 30%;
        background-color: #fff;
        background-image: none;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, .15);
        border-radius: .25rem;
    }

    .ti-input {
        border: none !important;
        height: 38px
    }

    .ti-tag {
        background-color: #36c7ca !important;
    }

    .input-paster {
        height: 42px;
    }

    .paster {
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .125);
        border-radius: .25rem;
        padding: 32px 24px;
        margin: 84px 0
    }

    .paster a {
        margin-left: 16px;
        background: #36c7ca !important;
        color: #fff;
    }

    .paster a:hover {
        color: #fff;
    }

    .paster input {
        width: 50% !important
    }

    .paster h3 {
        margin-bottom: 24px;
    }

    .paster p {
        margin-bottom: 24px !important;
    }

    .sitetitle {
        margin-bottom: 8px !important;
    }
</style>
<script>
    import MainLayout from '../layouts/Main.vue'
    import VueTagsInput from '@johmun/vue-tags-input';
    import {getCollections} from '../provider/collection.js';
    import {createPost,getPosts} from '../provider/posts.js';

    export default {
        components: {
            MainLayout,
            VueTagsInput
        },
        data() {
            return {
                collections: [],
                selected: "",
                url: "",
                posts: []

            };
        },
        methods: {
            registr: function(e) {
                let vm = this;
                let local = JSON.parse(window.localStorage.getItem('RegistrUser'));
                e.preventDefault();
                vm.$notify({
                    group: 'foo',
                    title: 'Fetching data and saving ...',
                    text:  vm.url + " is saving to your collection",
                    type: 'info'
                });
                createPost(local.token, this.url, this.selected).then(function(){
                    vm.$notify({
                        group: 'foo',
                        title: 'Article saved !',
                        text:  vm.url + " saved to your collection",
                        type: 'success'
                    });
                    vm.fetchPosts();
                }).catch(function(err){
                    vm.$notify({
                        group: 'foo',
                        title: 'Error ',
                        text: err,
                        type: 'error'
                    });
                })
            },
            fetchPosts: function(){
                let vm = this;
                let local = JSON.parse(window.localStorage.getItem('RegistrUser'));
                getPosts(local.token).then(res=>{
                    this.posts = res.slice(0, 6).map(res => {
                        for(let i = 0; i < vm.collections.length; i ++){
                            if(vm.collections[i].id === res.collection_id){
                                res.collection = vm.collections[i].name;
                            }
                        }
                        res.title = res.title.slice(0, 50);
                        res.description = res.description.slice(0, 120);
                        res.image_style = "background-image:url('"+ res.image +"'); background-position: center!important;";
                        return res;
                    });
                })
            }
        },
        created: function () {
            let local = JSON.parse(window.localStorage.getItem('RegistrUser'));
            getCollections(local.token).then(res => {
                console.log(res);
                this.collections = res;
                this.selected = this.collections[0].id
            });
           this.fetchPosts();
        }
    }
</script>
