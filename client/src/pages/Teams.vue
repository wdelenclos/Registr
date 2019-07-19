<template>
    <main-layout style="background-color: #fff; padding: 40px">
        <!-- Begin Site Title
   ================================================== -->
        <div class="container">
            <div class="row">
            <div class="col-sm-8 col-12">
                <!-- Begin List Posts
           ================================================== -->
                <section class="recent-posts">
                    <h3 class="mb-4">Teams</h3>
                    <hr/>
                    <div class="card-columns listrecent mt-4">

                        <!-- begin post -->
                        <span v-for="team in teams">
                        <div class="card clickable" @click="redirect(team.id)">
                            <div class="card-block">
                                <h2 class="card-title">{{ team.name }}</h2>
                                <p class="card-text">{{ team.collection.length }} collections, {{ team.users.length }}
                                    members</p>
                                <h4 class="card-text">ID : {{ team.id }}</h4>
                            </div>
                        </div>
                    </span>
                    </div>
                </section>
            </div>
                <div class="col-sm-4 col-12">
            <div class="paster">
                <h3 class="sitetitle">Join a team</h3>
                <div class="row">
                    <div class="col-12">
                        <p>Search a team and join it </p>
                        <form class="form-inline my-2 my-lg-0 mt-3">
                            <input class="form-control mr-sm-2 input-paster" type="text" v-model="teamId"
                                   placeholder="Type a team ID">
                            <button v-on:click="executejoin" class="btn btn-primary">Join</button>
                        </form>
                        <hr/>
                    </div>

                    <div class="col-12" style="border-left: solid 1px #fefefe">
                        <p>Create a team </p>
                        <form class="form-inline my-2 my-lg-0 mt-3">
                            <input class="form-control mr-sm-2 input-paster" type="text" v-model="teamName"
                                   placeholder="Type a team name">
                            <button v-on:click="executeCreate" class="btn btn-primary">Let's go</button>
                        </form>
                    </div>
                </div>
            </div>
                </div>
            </div>

        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import VLink from '../components/VLink.vue'
    import VueTagsInput from '@johmun/vue-tags-input';
    import {createTeam, getRelated, joinTeam} from '../provider/team.js';

    const local = JSON.parse(window.localStorage.getItem('RegistrUser'));
    export default {
        components: {
            MainLayout,
            VLink,
            VueTagsInput
        },
        data() {
            return {
                user: '',
                email: '',
                last_login: '',
                teamName: '',
                teamId: '',
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
                window.localStorage.removeItem('RegistrTeamHistory');
                window.sessionStorage.setItem('RegistrTeamHistory', "{\"route\": \"team\", \"id\": "+el+"}");
                window.location = "/team"
            },
            executejoin: function (e) {
                e.preventDefault();
                if (this.teamId !== null && this.teamId !== "") {
                    joinTeam(local.token, this.teamId).then(res => {
                        this.$notify({
                            group: 'foo',
                            title: 'Team joined',
                            text: "Team "+this.teamId+" joigned :)",
                            type: 'success'
                        });
                        this.teamId = "";
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
                    }).catch(function (err) {
                        this.$notify({
                            group: 'foo',
                            title: 'Not possible to join',
                            text: err,
                            type: 'err'
                        });
                    })
                }
                else {
                    this.$notify({
                        group: 'foo',
                        title: 'No team ID !',
                        text: 'Please provide a valid team ID',
                        type: 'warn'
                    });
                }
            },
            executeCreate: function (e) {
                e.preventDefault();
                if (this.teamName !== null && this.teamName !== "") {
                    createTeam(local.token, this.teamName, true).then(res => {
                        this.$notify({
                            group: 'foo',
                            title: 'Team created !',
                            text: "You have a new team with ID: " + res.id,
                            type: 'success'
                        });
                        this.teams.push({
                            'name': res.name,
                            'users': res.users,
                            'collection': res.collection,
                            id: res.id
                        })
                    }).catch(function (err) {
                        this.$notify({
                            group: 'foo',
                            title: 'Not possible to join',
                            text: err,
                            type: 'err'
                        });
                    })
                }
                else {
                    this.$notify({
                        group: 'foo',
                        title: 'No team ID !',
                        text: 'Please provide a valid team ID',
                        type: 'warn'
                    });
                }
            }
        },

        created: function () {
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
        width: 60% !important
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
