<script>
import * as utils from "../utils/index";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    login: function() {
      utils
        .login(this.email, this.pass)
        .then(user => {
          localStorage.setItem("user", user.uid);

          window.location.replace("/admin");
        })
        .catch(function(error) {
          alert(error.message);
        });
    },
    logout: function() {
      utils.logout();
    }
  }
};
</script>
<template>
  <div class="flex min-h-screen min-w-fulll bg-hardbg overflow-auto">
    <div class="m-auto bg-softbg w-2/5 h-56">
      <div class="text-white text-4xl mt-4">Giriş Yap</div>
      <label for="email" class="text-white">Email :</label>
      <input type="text" v-model="email" id="email" class="m-auto mt-2 ml-1" />
      <br />
      <label for="password" class="text-white">Parola :</label>
      <input v-model="pass" class="mt-4 ml-1" id="password" type="password" />
      <br />
      <div class="mt-2">
        <button
          @click="login"
          class="text-tomato border-2 border-tomato hover:bg-tomato hover:text-white p-1"
        >Giriş Yap</button>
        <button
          @click="logout"
          class="text-indigo border-2 border-indigo hover:bg-indigo hover:text-white ml-4 p-1"
        >Geri Dön</button>
      </div>
    </div>
  </div>
</template>
