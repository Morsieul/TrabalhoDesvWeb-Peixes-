<script lang="ts">
    import Axios from 'axios'
    export default {
        name: 'SignUpPeixes',
        components: {
        },
        data() {
            return {
                username : '',
                password : '',
                repeat_password : '',
                email : '',
                displayname : '',
            }
        },
        methods: {
            async handleSignUp() {
                const response = await Axios.post('signup', {
                    username: this.username ,
                    password: this.password ,
                    repeat_password: this.repeat_password ,
                    email: this.email ,
                    displayname: this.displayname ,
                });
                
                
                // console.log(response)
                this.$router.push('/login')
            }
            
        }
    }
</script>

<template>
    <form class="wrapper" @submit.prevent="handleSignUp">
        <div>
            <h1>Sign up</h1>
        <nav>
            <div class="input-box" >
                <input type="text"  placeholder="Display Name" 
                v-model="displayname"
                required>
                <i class='bx bxs-user-circle' style='color:#920909' ></i>
                <input type="text"  placeholder="Username"
                v-model="username"
                required>
                <i class='bx bxs-user-circle' style='color:#920909' ></i>
                <input type="email"  placeholder="Email"
                v-model="email"
                required>
                <i class='bx bx-envelope' style='color:#920909' ></i>
                <input type="password" placeholder="Password"
                v-model="password" 
                required>
                <i class='bx bxs-lock' style='color:#920909' ></i>
                <input type="password" 
                placeholder="Repeat the password" 
                v-model="repeat_password"
                required>
                <!-- <i class='bx bxs-lock' style='color:#920909' ></i>
                <input type="date" placeholder="Date of birth" required> -->
            </div>
            <div>
                <button type="submit" class="button">Sign up</button>
            </div>
            <div>
                <p>Already have an account? <router-link to = "/login">Click here to login!</router-link></p>
            </div>
        </nav>
        </div>
    </form>
</template>