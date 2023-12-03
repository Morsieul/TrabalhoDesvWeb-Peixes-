<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { onMounted } from 'vue'
import axios from 'axios'

const userStore = useUserStore()

console.log("Melancia",userStore)
</script>

<template>
    <header>
            <p> Peixies</p>
            <!-- <img class="img" src="imgs/logo.jpg" alt ="logo do pirata da hora"> -->
            <input type="text" class="search" name="search" placeholder="Pesquise no site">
            <nav class ="menu"> 
            <div>
                <router-link v-if="userStore.user.username" to="/" class="text-white" >{{ userStore.user.username }}</router-link>
                <div v-else>
                    <router-link  to="/login"> Login</router-link>
                    <router-link  to="/signup" class = "signup">Sign Up</router-link>
                </div>
            </div>
        </nav>
    </header>

    <section class = "Following">
            <h2> Following</h2>
    </section>
    <section class = "Recommendation">
            <h2> Recommendation</h2>
    </section>        
    <footer class = "footer">
            <p class ="footer_content">Contato</p>
            <ul>
                <li>X</li>
                <li>Istagram</li>
                <li>Facebook</li>
            </ul>
            <p class="footer_content">Politica de Privacidade</p>
    </footer>

</template>

<style>
.base {
    background-color: rgb(51, 51, 51);
    color: rgb(48, 48, 48);
    border-radius: 5px;
    padding: 5px;
    margin: auto;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-family: PixelFont, monospace;
}


header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    color:rgb(83, 1, 1);
    padding: 20px 0;
    flex-shrink: 1;
    /* background-color: rgb(194, 204, 201); */
}


/* .logo_legal {
    font-size: 10px;
    font-weight: bold;
}

.img {
    height: 30%;
    width: 30%;
} */

input {
    width: 400%;
    flex-grow: 1;
    align-self: center;
    border-radius: 20px;
    border-style: ridge;
    border-left: 20px;
    border: 2px solid rgb(83, 1, 1);
    text-align: center;
    font-size: 20px;
    font-family: PixelFont, monospace;
    padding-right: 20px;
    padding-left: 20px;
    
}
.menu {
    display: flex;
    justify-content: right;
    align-items: center;
    width: 67%;
    max-width: 1200px;
    padding: 0 20px;
    box-sizing: border-box;
    margin: auto;
    flex-shrink: 1;
}

.signup {
    border-color: red;
    background-color: red;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    height: 15%;
    width: 10%;
    text-align: center;
    align-self: center;
}

section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    height: 500px;
    width: 1350px;
}

.Following {
    font-size: 22px;
    background-color: rgb(110, 110, 110);
}

.Recommendation {
    font-size: 22px;
    background-color: rgb(56, 56, 56);
}

.footer {
    background-color: rgb(194, 204, 201);
    color : black;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: 100%;
    text-align: center;
    font-size: 10px;
    font-weight: lighter;
}

.footer_content {
    font-size: 14px;
}

ul {
    text-align: center;
  }
  

li {
    list-style-type: disc;
    list-style-position: inside;
    margin-left: 0;
}

li:first-child {
    margin-left: -27px;
  }
</style>