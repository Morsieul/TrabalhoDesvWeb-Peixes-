<script setup lang="ts">
import { ref, computed } from 'vue'
import { isAxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { authenticationService} from '@/api/Authentication'

const username = ref('')
const password = ref('')
const isEmpty = computed(() => username.value.length == 0 || password.value.length == 0)
const submitted = ref(false)
const errorMessage = ref('')

const router = useRouter()

async function authenticate() {
  submitted.value = true
  try {
    const user = await authenticationService.login(username.value, password.value)
    if(user.role == 'admin') {
      router.push('/admin')
    } else {
        console.log("Mamao")
      router.push('/')
    }
  } catch (e) {
    if(isAxiosError(e)) {
      console.log(e.response?.data)
      console.log("Oi oi oi")
      errorMessage.value = e.response?.data.error.message
    } 
  }
}

</script>

<template>
    <div class="wrapper">
            <h1>Login</h1>
        <nav>
            <div v-if="errorMessage"  class="alert alert-danger" role="alert">
                    {{ errorMessage }}
            </div>
        <form novalidate @submit.prevent="authenticate" :class="{ 'was-validated': submitted }">
            <div class="input-box">
                <input
                v-model="username"
                class="form-control"
                type="text"  
                id = "usernameInput"
                placeholder="Username"
                required
                />
                <div class="invalid-feedback">Forneça um nome de usuário existente.</div>
                <!-- <i class='bx bxs-user-circle' style='color:#920909' ></i> -->
                <input 
                v-model="password"
                class="form-control"
                id="passwordInput"
                type="password" 
                placeholder="Password" 
                required>
                <!-- <i class='bx bxs-lock' style='color:#920909' ></i> -->
                <div class="invalid-feedback">A senha é um campo obrigatório.</div>
                
            </div>
            <div>
                <input
                type="submit"
                class="button"
                value="Login"
                :disabled="isEmpty">
            </div>
            <div>
                <p>Don't have an account? <router-link to="/signup" >Click here to sign up!</router-link></p>
            </div>
        </form>
         </nav>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(56, 56, 56);
    color: white;
    font-size: 16px;
    font-weight: lighter;
}

.wrapper {
    width: 500px;
    padding: 30px;
}

.wrapper h1 {
    font-size: 32px;
    text-align: center ;
}

.wrapper input-box {
    width: 100%;
    height: 50px;
    margin : 30px 0;
}
.input-box input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-style: ridge;
    border-left: 20px;
    border: 2px solid rgb(83, 1, 1);
    border-radius: 40px;
    text-align: center;
}
.input-box input::placeholder {
    color: rgb(83, 1, 1);
}

.input-box i {
    position: absolute;
}

.wrapper .button {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: rgb(189, 4, 4);
    border-radius: 40px;
    box-shadow: 0 0 10px rgb(94, 94, 94);
    cursor: pointer;
    font-size: 18px;
    color: white;
}

a :link {
    color: crimson;
}

a:visited {
    color: rgb(247, 248, 255);
    text-decoration-color: rgb(255, 0, 98);
}
</style>