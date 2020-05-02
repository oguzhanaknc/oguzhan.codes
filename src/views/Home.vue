<template>
  <div class="flex min-h-screen min-w-fulll bg-hardbg overflow-auto">
    <NavBar />

    <div class="container flex-wrap flex">
      <div class="mx-8 md:mx-0 mt-2">
        <img class="md:ml-40 md:mt-20" src="../../public/me.jpg" />
      </div>
      <div class="md:ml-24 md:mt-24 -mt-24 text-center max-w-xl md:text-left">
        <div class="md:text-4xl text-3xl text-white font-bold">Oğuzhan Akıncı 🔥</div>
        <p class="md:mt-8 md:text-3xl">
          Fireship.io is an ecosystem of practical resources for developers who
          want to build high-quality web & mobile apps.
        </p>
        <div class="mt-8">
          <button
            class="border-2 border-tomato mr-2 text-lg text-lg h-10 w-32 hover:bg-tomato hover:text-white"
          >Github</button>
          <button
            class="border-2 border-tomato mr-2 text-lg text-lg h-10 w-32 hover:bg-tomato hover:text-white"
          >Twitter</button>
          <button
            class="border-2 border-tomato mr-2 text-lg text-lg h-10 w-32 hover:bg-tomato hover:text-white"
          >Instagram</button>
          <button
            class="border-2 border-tomato mr-2 text-lg h-10 w-32 hover:bg-tomato hover:text-white"
          >Facebook</button>
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
