<template>
        <div class="wrapper">
            <h1>Sign up</h1>
        <nav>
            <div class="input-box">
                <input type="text"  placeholder="Display Name" required>
                <i class='bx bxs-user-circle' style='color:#920909' ></i>
                <input type="text"  placeholder="Username" required>
                <i class='bx bxs-user-circle' style='color:#920909' ></i>
                <input type="email"  placeholder="Email" required>
                <i class='bx bx-envelope' style='color:#920909' ></i>
                <input type="password" placeholder="Password" required>
                <i class='bx bxs-lock' style='color:#920909' ></i>
                <input type="password" placeholder="Repeat the password" required>
                <i class='bx bxs-lock' style='color:#920909' ></i>
                <input type="date" placeholder="Date of birth" required>
            </div>
            <div>
                <button type="submit" class="button">Sign up</button>
            </div>
            <div>
                <p>Already have an account? <router-link to = "/login">Click here to login!</router-link></p>
            </div>
        </nav>
        </div>
</template>