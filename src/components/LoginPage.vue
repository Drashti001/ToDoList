<template>
<div>
    <form style="width:600px;margin:auto">
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="pwd" placeholder="Password" />
        </div>
        <button v-on:click="login" class="btn btn-primary btn-block">Login</button>
        <!-- <p>
            <router-link to="/">Sign-up</router-link>
        </p> -->
    </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data() {
        return {

            email: '',
            pwd: ''
        }
    },
    methods: {
        // abc(){
        //     console.log(this.email);
        //     alert(this.email);
        // },

        async login() {

            // console.log(pwd);
            //   console.log(email);
            //alert('dddsdsds');
            axios.get(`http://localhost:3000/users?email=${this.email}&pwd=${this.pwd}`).then((response) => {
                console.log(response)
            }).catch((e) => {
                console.log(e)
            });

            //    let result = await axios.get(
            //         'http://localhost:3000/users?email=abc@gmail.com'
            //        // `http://localhost:3000/users?email=${this.email}&pwd=${this.pwd}`
            //     );
            // console.log(result);

            // if (result.status == 200 && result.data.length > 0) {
            //     //console.log(result);
            //     localStorage.setItem("user-info", JSON.stringify(result.data));
            //     //this.$router.push("/");
            // } else {
            //     alert("Email Address or Password is Invalid . Please try again.....");
            //     this.email = "";
            //     this.pwd = "";
            // }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
