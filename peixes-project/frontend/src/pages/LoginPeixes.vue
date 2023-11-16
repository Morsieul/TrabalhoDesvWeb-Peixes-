<template>
    <!DOCTYPE html>
<html>
    <head>
        <title> Login - Peixes</title>
        <meta charset="utf-8">
        <meta lang = "pt-br">
        <link rel="stylesheet" href="login_signup.css">
        <link rel="icon" href="imgs/logo.jpg">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    </head>
    <body>
        <div class="wrapper">
            <h1>Login</h1>
        <nav>
            <div class="input-box">
                <input type="text"  placeholder="Username" required>
                <i class='bx bxs-user-circle' style='color:#920909' ></i>
                <input type="password" placeholder="Password" required>
                 <i class='bx bxs-lock' style='color:#920909' ></i>
            </div>
            <div>
                <button type="submit" class="button">Login</button>
            </div>
            <div>
                <p>Don't have an account? <router-link to="/signup" >Click here to sign up!</router-link></p>
            </div>
        </nav>
        </div>
    </body>
</html>
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