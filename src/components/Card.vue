<template>
  <div>
    <div
      class="w-64 sm:w-full transition duration-500 ease-in-out bg-softbg hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-105 mt-8 text-left max-w-lg rounded shadow-lg"
    >
      <div class="w-40 text-lg text-contentcolor shadow-lg">
        <font-awesome-icon
          :icon="['fab', 'js']"
          class="bg-wihte text-tomato text-4xl"
        />
        <div class="ml-1">main.js</div>
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl text-white mb-2">The Coldest Sunset</div>
        <p class="font-mono text-lg text-contentcolor">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <prism-editor :code="code" language="js">var l = yes</prism-editor>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-lemon px-1 text-sm text-gray-300 mr-2"
          >#photography</span
        >
        <span class="inline-block bg-indigo px-1 text-sm text-gray-300 mr-2"
          >#travel</span
        >
      </div>
    </div>
  </div>
</template>

<script>
//https://unixgame.io/unix50

import PrismEditor from "vue-prism-editor";
export default {
  components: {
    PrismEditor,
  },
  data: function() {
    return {
      code: "var selamun = x;",
    };
  },
};
</script>

<style lang="css"></style>
