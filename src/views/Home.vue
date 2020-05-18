<template>
  <div class="flex min-h-screen min-w-fulll bg-hardbg overflow-auto">
    <NavBar />

    <div class="container flex justify-center flex-wrap flex text-center">
      <div class="mx-8 md:mt-24 xl:ml-24">
        <img class="md:ml-24 xl:ml-0" src="../../public/me.jpg" />
      </div>
      <div class="md:ml-24 md:mt-24 -mt-18 text-center max-w-xl xl:text-left">
        <div class="md:text-4xl text-3xl text-white font-bold">Oğuzhan Akıncı 🔥</div>
        <p class="md:mt-8 md:text-3xl text-contentcolor font-light">
          Merhaba, Ben
          <a class="text-white">Oğuzhan Akıncı</a> bu projeyi yazılım geliştirme
          serüvenimde öğrendiklerimi paylaşmak amacıyla geliştirdim. Hedefim
          basit 👉 sürekli yeni şeyler öğrenip üretkenliğimi arttırmak🚀.
        </p>
        <div class="mt-10">
          <a href="https://github.com/oguzhanaknc" target="github">
            <button
              class="border-2 border-tomato mr-4 text-lg text-lg h-10 w-32 hover:bg-tomato hover:text-white mt-2"
            >Github</button>
          </a>
          <a href="https://twitter.com/oguzhanaknc" target="twitter">
            <button
              class="border-2 border-tomato mr-4 text-lg text-lg h-10 w-32 hover:bg-tomato hover:text-white mt-2"
            >Twitter</button>
          </a>
          <a href="https://www.instagram.com/oguzhanaknc_/" target="instagram">
            <button
              class="border-2 border-tomato mr-4 text-lg text-lg h-10 w-32 hover:bg-tomato hover:text-white mt-2"
            >Instagram</button>
          </a>
          <a href="https://www.facebook.com/oguzhanaknc" target="facebook">
            <button
              class="border-2 border-tomato mr-4 text-lg h-10 w-32 hover:bg-tomato hover:text-white mt-2"
            >Facebook</button>
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
