<template>
    <main-layout>
        <!-- Begin Site Title
   ================================================== -->
        <div class="container">
            <div class="paster">
                <h3 class="sitetitle">Join a team</h3>
                <div class="row">
                    <div class="col-6">
                        <p> Search a team and join it </p>
                        <form class="form-inline my-2 my-lg-0 mt-3">
                            <input class="form-control mr-sm-2 input-paster" type="text" placeholder="Type a team ID">
                            <a href="#" class="btn btn-primary">Join</a>
                        </form>
                    </div>
                    <div class="col-6" style="border-left: solid 1px #fefefe">
                        <p> Create a team </p>
                        <form class="form-inline my-2 my-lg-0 mt-3">
                            <input class="form-control mr-sm-2 input-paster" type="text" placeholder="Type a team name">
                            <a href="#" class="btn btn-primary">Create</a>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Begin List Posts
            ================================================== -->
            <section class="recent-posts">
                <div class="section-title">
                    <h2 class="mt-5"><span>My teams</span></h2>
                </div>
                <div class="card-columns listrecent">

                    <!-- begin post -->
                    <div class="card">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you
                                know?</a></h2>
                            <p class="card-text">4 collections, 3 members</p>
                            <h4 class="card-text">ID : 4R5T67Y8987654</h4>
                        </div>
                    </div>
                    <!-- end post -->
                    <!-- begin post -->
                    <div class="card">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you
                                know?</a></h2>
                            <h4 class="card-text">4 collections, 3 members</h4>
                        </div>
                    </div>
                    <!-- end post -->
                    <!-- begin post -->
                    <div class="card">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you
                                know?</a></h2>
                            <h4 class="card-text">4 collections, 3 members</h4>
                        </div>
                    </div>
                    <!-- end post -->
                    <!-- begin post -->
                    <div class="card">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you
                                know?</a></h2>
                            <h4 class="card-text">4 collections, 3 members</h4>
                        </div>
                    </div>
                    <!-- end post -->
                    <!-- begin post -->
                    <div class="card">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you
                                know?</a></h2>
                            <h4 class="card-text">4 collections, 3 members</h4>
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
    import VueTagsInput from '@johmun/vue-tags-input'

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
                last_login: ''
            }
        },
        methods: {
            logout: function () {
                window.localStorage.removeItem('RegistrUser');
                window.location = "/"
            }
        },
        created: function () {
            let local = JSON.parse(window.localStorage.getItem('RegistrUser'));
            console.log(local);
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
        margin: 50px 0
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
