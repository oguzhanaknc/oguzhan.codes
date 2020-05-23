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
  },
  created() {
    document.title = "Yönetici Girişi";
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
        <button @click="login" class="button--tomato">Giriş Yap</button>
        <button @click="logout" class="button--blue">Geri Dön</button>
      </div>
    </div>
  </div>
</template>
