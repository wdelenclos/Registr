<template>
    <main-layout>
        <img src="/assets/img/bg.jpg" width="100%" style="position: absolute; top: 0; left: 0;">
        <!-- Begin Site Title

   ================================================== -->
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="paster">
                        <h2 class="sitetitle">{{ collectionName }} <button @click="deleCol(collectionId)" class="btn btn-sm btn-error ml-5">Remove collection</button></h2>


                    </div>

                </div>
                <div class="col-12">
                    <section class="recent-posts card p-5">
                        <div class="section-title">
                            <h2 class=""><span>{{ collectionPosts.length }} posts</span></h2>
                        </div>
                        <div class="card-columns listrecent">
                            <!-- begin post -->
                            <!-- begin post -->
                            <div class="card" v-for="post in collectionPosts">
                                <div class="row">
                                    <div class="col-md-5 wrapthumbnail">
                                        <a href="post.html">
                                            <img class="thumbnail" :src="post.image" width="100%"/>
                                        </a>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-block">
                                            <h2 class="card-title"><a :href="post.url" target="_blank">{{post.title}}</a></h2>
                                            <h4 class="card-text">{{post.description}}</h4>
                                            <div class="metafooter">
                                                <div class="wrapfooter">
                                    <span class="meta-footer-thumb">
                                    </span>
                                                    <span class="author-meta">
                                    <span class="post-date">{{post.created_at.slice(0, 10)}}</span> <button @click="deletePost(post.id)" class="btn btn-sm btn-secondary">✖</button>
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
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import VLink from '../components/VLink.vue'
    import VueTagsInput from '@johmun/vue-tags-input';
    import {deleteOnePost} from '../provider/posts.js';
    import {getOneCollection, deleteCollection} from '../provider/collection.js';

    const local = JSON.parse(window.localStorage.getItem('RegistrUser'));

    export default {
        components: {
            MainLayout,
            VLink,
            VueTagsInput
        },
        data() {
            return {
                collectionId: '',
                collectionName: '',
                collectionPosts: [],
                collectionTeam: []
            }
        },
        methods: {
            deletePost: function (id) {
                deleteOnePost(local.token, id);
                window.location = "/collections";
            },
            deleCol: function (id) {
                deleteCollection(local.token, id);
                window.location = "/dashboard";
            },
        },
        created: function () {
            this.collectionId = JSON.parse(window.sessionStorage.getItem('RegistrCollectionHistory')).id;
            getOneCollection(local.token, this.collectionId).then(res => {
                this.collectionName = res.name;
                this.collectionId = res.id;
                this.collectionPosts = res.posts;
                this.collectionTeam = res.team;
            });
        }
    }
</script>

<style scoped>
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
        margin: 50px 0
    }

    .paster a {
        margin-left: 16px;
        color: #fff;
    }

    .paster a:hover {
        color: #fff;
    }

    .paster input {
        width: 70% !important
    }

    .paster h3 {
        margin-bottom: 24px;
    }

    .paster p {
        margin-bottom: 24px !important;
    }

    .hero404 {
        opacity: 0.9;
        z-index: -1;
        position: absolute;
        width: 25%;
        right: 0;
        top: 56px;
    }

    .btn-error {
        background: linear-gradient(89.71deg, #fe5862 26.86%, #fbb027 422.8%);
        color: #fff;
        transition-duration: .3s;
        cursor: pointer;
    }

    .btn-error:hover {
        background: linear-gradient(89.71deg, #e65059 26.86%, #c89413 422.8%);
    }

    @media screen and (max-width: 960px) {
        .m-hidden {
            display: none;
        }
    }

    label {
        color: #78868c;
    }

    .btn-logout {
        background: linear-gradient(89.71deg, #36c7ca 26.86%, #fbb027 422.8%);
        color: #fff;
        transition-duration: .3s;
        cursor: pointer;
    }
</style>
