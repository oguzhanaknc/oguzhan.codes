<template>
  <div class="flex min-h-screen bg-gray-800 overflow-auto">
    <div
      class="shadow-lg fixed h-screen w-20 block bg-gray-900 float-left z-10"
    >
      <ul>
        <li
          class="h-20 home text-white"
          @mouseover="mouseover()"
          @mouseleave="mouseleave()"
        >
          <div v-if="!isover">
            <a href="#">
              <img
                class="h-20"
                v-bind:src="require('../../public/' + img)"
                alt="yok"
              />
            </a>
          </div>
          <div class="text-5xl" v-if="isover">
            <a href="#">
              <font-awesome-icon icon="house-damage" class="special" />
            </a>
          </div>
        </li>

        <li>
          <a href="#">
            <font-awesome-icon
              icon="book-open"
              class="text-gray-600 hover:text-red-500 text-2xl mt-12 transition duration-500"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon
              icon="code"
              class="text-gray-600  hover:text-red-500 text-2xl mt-12 transition duration-500"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon
              icon="tags"
              class="text-gray-600  hover:text-red-500 text-2xl mt-12 transition duration-500"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon
              icon="coffee"
              class="text-gray-600  hover:text-red-500 text-2xl mt-12 transition duration-500"
            />
          </a>
        </li>
      </ul>
    </div>
    <div class="absolute w-11/12 ml-24 z-0 mt-12 ">
      <div class="text-white text-4xl text-left font-bold">
        Quick Snippets and Code Samples
      </div>
      <hr class="border-dashed border-2 border-gray-600 " />
    </div>
    <div class="mt-40 m-auto mb-8 ">
      <div
        class=" transition duration-500 ease-in-out bg-gray-700 hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-105 ...
              mt-8 text-left  max-w-2xl rounded shadow-lg"
      >
        <div class="px-6 py-4">
          <div class="font-bold text-xl text-white mb-2">
            The Coldest Sunset
          </div>
          <p class="font-mono text-lg text-gray-400 text-base ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span
            class="inline-block bg-yellow-500 px-1 text-sm text-gray-300 mr-2"
            >#photography</span
          >
          <span
            class="inline-block bg-indigo-700 px-1 text-sm text-gray-300 mr-2"
            >#travel</span
          >
        </div>
      </div>
      <div
        class="transition duration-500 ease-in-out bg-gray-700 hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-105 ...
              mt-8 text-left  max-w-2xl rounded shadow-lg"
      >
        <div class="px-6 py-4">
          <div class="font-bold text-xl text-white mb-2">
            The Coldest Sunset
          </div>
          <p class="font-mono text-lg text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span
            class="inline-block bg-yellow-500 px-1 text-sm text-gray-300 mr-2"
            >#photography</span
          >
          <span class="inline-block bg-blue-600 px-1 text-sm text-gray-300 mr-2"
            >#travel</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "../css/tailwind.css";

export default {
  name: "Home",
  data: function() {
    return { img: "200.gif", isover: true };
  },
  methods: {
    mouseover: function() {
      this.isover = false;
    },
    mouseleave: function() {
      this.isover = true;
    },
  },
};
</script>
<style scoped>
li {
  display: block;
}
.home {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    331deg,
    rgba(2, 0, 36, 1) 0%,
    #f96a1f 0%,
    #fa8142 50%,
    #fb9865 100%
  );
}
</style>
