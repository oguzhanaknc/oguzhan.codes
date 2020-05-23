<template>
  <div class="flex min-h-screen min-w-fulll bg-hardbg overflow-auto">
    <NavBar />

    <div class="container flex justify-center flex-wrap flex text-center">
      <div class="mx-8 md:mt-24 xl:ml-24">
        <img class="md:ml-24 md:mt-4 max-w-xs" src="../../public/me.jpeg" />
      </div>
      <div class="md:ml-24 md:mt-24 -mt-18 text-center max-w-xl xl:text-left">
        <div class="md:text-4xl text-3xl text-white font-bold">Oğuzhan Akıncı 🔥</div>
        <p class="md:mt-8 md:text-3xl text-contentcolor">
          Merhaba, Ben
          <a class="text-white">Oğuzhan Akıncı</a> bu projeyi yazılım geliştirme
          serüvenimde öğrendiklerimi paylaşmak amacıyla geliştirdim. Hedefim
          basit 👉 sürekli yeni şeyler öğrenip üretkenliğimi arttırmak🚀.
        </p>
        <div class="mt-10">
          <a href="https://github.com/oguzhanaknc" target="github">
            <button class="button--blue">Github</button>
          </a>
          <a href="https://twitter.com/oguzhanaknc" target="twitter">
            <button class="button--tomato">Twitter</button>
          </a>
          <a href="https://www.instagram.com/oguzhanaknc_/" target="instagram">
            <button class="button--tomato">Instagram</button>
          </a>
          <a href="https://www.facebook.com/oguzhanaknc" target="facebook">
            <button class="button--tomato">Facebook</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "../css/tailwind.css";

import NavBar from "../components/NavBar";

export default {
  name: "Home",
  created() {
    console.log(process.env.apiKey, 66);
    document.title = "Oğuzhan Akıncı";
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
.image {
  opacity: 0.7;
}
</style>
