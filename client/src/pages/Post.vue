<template>
    <main-layout>
        <!-- Begin Site Title

   ================================================== -->
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="paster">
                        <h2 class="sitetitle mb-5">{{ teamName }}</h2>

                        <p>Join ID : {{ teamId }} </p>

<hr/>

                      <h5>  {{ teamUsers.length }} users</h5>
                        <span class="author-meta" v-for="user in teamUsers">
		              <span class="post-name">{{user.email}}</span><br>
		              <span class="post-date">Last activity: {{ user.updated_at }}</span>
		              </span>

                    </div>

                </div>
                <div class="col-md-6 col-12">
                    <div class="paster">
                        <h3>Manage</h3>
                        <a href="#" @click="deleteTeam" class="btn btn-sm btn-error">Delete
                            team</a>
                    </div>
                    <!-- Begin List Posts
                    ================================================== -->

                </div>
                <div class="col-12">
                    <section class="recent-posts">
                        <div class="section-title">
                            <h2 class="mt-5"><span>{{ teamCollections.length }} collections</span></h2>
                        </div>
                        <div class="card-columns listrecent">
                            <!-- begin post -->
                            <span v-for="collection in teamCollections">
                            <div class="card clickable" @click="redirect(collection.id)">
                                <div class="card-block">
                                    <h2 class="card-title">{{ collection.name }}</h2>
                                    <p class="card-text">Created at {{ collection.created_at }}
                                    </p>
                                </div>
                            </div>
                        </span>


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
    import {deleteOneTeam, getOneTeam} from '../provider/team.js';

    const local = JSON.parse(window.localStorage.getItem('RegistrUser'));

    export default {
        components: {
            MainLayout,
            VLink,
            VueTagsInput
        },
        data() {
            return {
                teamId: '',
                teamName: '',
                teamUsers: [],
                teamCollections: []
            }
        },
        created: function () {
            this.teamId = JSON.parse(window.sessionStorage.getItem('RegistrTeamHistory')).id;
            getOneTeam(local.token, this.teamId).then(res => {
                this.teamName = res.name;
                this.teamId = res.id;
                this.teamUsers = res.users;
                this.teamCollections = res.collection;
            });
        },
        methods: {
            deleteTeam: function (e) {
                e.preventDefault();
                deleteOneTeam(local.token, this.teamId);
                window.location = "dashboard";
            }
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
