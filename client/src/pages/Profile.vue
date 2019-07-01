<template>
    <main-layout>
        <!-- Begin Site Title
   ================================================== -->
        <div class="container">
            <div class="mainheading">
                <h1 class="sitetitle">Hi {{user}}</h1>
                <p class="lead mb-5">
                   Here, you can manage your profile and see you last pins
                </p>

                <label>Email</label>
                <p>{{email}}</p>

                <label>Last login</label>
                <p>{{last_login}}</p>

                <button class="btn btn-logout mt-4" v-on:click="logout">Logout</button>
                <button class="btn btn-error mt-4" v-on:click="removeAccount">Remove my account</button>
                <img class="hero404 m-hidden" src="assets/img/step3.svg">
            </div>

        </div>


    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import VLink from '../components/VLink.vue'
    export default {
        components: {
            MainLayout,
            VLink
        },
        data(){
            return{
                user : '',
                email : '',
                last_login: ''
            }
        },
        methods: {
            logout: function(){
                window.localStorage.removeItem('RegistrUser');
                window.location = "/"
            }
        },
        created: function() {
                let local =  JSON.parse(window.localStorage.getItem('RegistrUser'));
                console.log(local);
                this.user = local.email.split('@')[0];
                this.email= local.email;
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
    .btn-error{
        background: linear-gradient(89.71deg, #fe5862 26.86%, #fbb027 422.8%);
        color: #fff;
        transition-duration: .3s;
        cursor: pointer;
    }
    .btn-error:hover{
        background: linear-gradient(89.71deg, #e65059 26.86%, #c89413 422.8%);
    }
    @media screen and (max-width: 960px){
        .m-hidden{
            display: none;
        }
    }
    label{
        color: #78868c;
    }
    .btn-logout{
        background: linear-gradient(89.71deg, #36c7ca 26.86%, #fbb027 422.8%);
        color: #fff;
        transition-duration: .3s;
        cursor: pointer;
    }
</style>
