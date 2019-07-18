<template>
    <main-layout style="background-color: #fff; padding: 40px">
        <!-- Begin Site Title
   ================================================== -->
        <div class="container">
            <h3 class="mb-4">Collections</h3>
            <hr/>
            <!-- Begin List Posts
            ================================================== -->
            <section class="recent-posts card p-5 mt-5" v-for="team in teams">
                <h4 class="mb-5"><span class="mr-4">{{team.name}}</span>   <a href="/new" class="btn btn-primary">+ New collection</a> </h4>

                <div class="card-columns listrecent">
                    <!-- begin post -->
                    <div class="card" v-for="collection in team.collection">
                        <div class="card-block">
                            <h2 class="card-title"><a class="clickable" @click="redirect(collection.id)">{{collection.name}}</a></h2>
                        </div>
                    </div>
                    <!-- end post -->

                </div>
            </section>


        </div>


    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import VLink from '../components/VLink.vue'
    import {getRelated} from '../provider/team.js';

    export default {
        components: {
            MainLayout,
            VLink
        },
        data() {
            return {
                user: '',
                email: '',
                last_login: '',
                teams: []
            }
        },
        methods: {
            logout: function () {
                window.localStorage.removeItem('RegistrUser');
                window.location = "/"
            },
            redirect: function(el){
                console.log(el);
                window.localStorage.removeItem('RegistrCollectionHistory');
                window.sessionStorage.setItem('RegistrCollectionHistory', "{\"route\": \"collection\", \"id\": "+el+"}");
                window.location = "/collection"
            }
        },
        created: function () {
            let local = JSON.parse(window.localStorage.getItem('RegistrUser'));
            getRelated(local.token).then(res => {
                this.teams = res.map(function (res) {
                    return {
                        'name': res.name,
                        'users': res.users,
                        'collection': res.collection,
                        id: res.id
                    }
                })
            });
            this.user = local.email.split('@')[0];
            this.email = local.email;
            this.last_login = local.last_login
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
    .paster {
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .125);
        border-radius: .25rem;
        padding: 32px 24px;
        margin: 84px 0;
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

    .clickable{
        cursor: pointer;
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
