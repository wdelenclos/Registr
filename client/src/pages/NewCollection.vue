<template>
    <main-layout style="background-color: #fff; padding: 40px">
        <img src="/assets/img/bg.jpg"width="100%" style="position: absolute; top: 0; left: 0;">
        <div class="container">
            <div class="paster">
                <h3 class="sitetitle">Create a new collection</h3>
                <p>First name you collection, and then choose a team where add it</p>
                <form class="form-inline my-2 my-lg-0 mt-3">
                    <input class="form-control mr-sm-2 input-paster" type="text" v-model="title" placeholder="Collection name">
                    <select class="input-paster" v-model="selected">
                        <option v-for="team in teams" v-bind:value="team.id">
                            {{ team.name }}
                        </option>
                    </select>
                    <button @click="createCol" class="btn btn-primary ml-3">Add it</button>
                </form>
            </div>

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
    import {getRelated} from '../provider/team.js';
    import {createCollection} from '../provider/collection.js';
    let local = JSON.parse(window.localStorage.getItem('RegistrUser'));
    export default {
        components: {
            MainLayout,
            VueTagsInput
        },
        data() {
            return {
                teams: [],
                selected: "",
                title: ""

            };
        },
        methods: {
            createCol: function(){
                createCollection(local.token, this.title, this.selected ).then(function(){
                    window.location = "/collections"
                })
            }
        },
        created: function () {
            getRelated(local.token).then(res => {
                console.log(res);
                this.teams = res;
                this.selected = this.teams[0].id
            });
            this.fetchPosts();
        }
    }
</script>
