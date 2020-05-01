<template>
  <div class="flex min-h-screen bg-hardbg overflow-auto">
    <div class="shadow-2xl fixed h-screen w-16 block bg-softbg float-left z-10">
      <ul>
        <li
          class="h-16 home text-white"
          @mouseover="mouseover()"
          @mouseleave="mouseleave()"
        >
          <div v-if="!isover">
            <a href="#">
              <img
                class="h-16"
                v-bind:src="require('../../public/' + img)"
                alt="yok"
              />
            </a>
          </div>
          <div class="text-5xl" v-if="isover">
            <a href="#">
              <font-awesome-icon icon="house-damage" />
            </a>
          </div>
        </li>

        <li>
          <a class="tooltip " href="#">
            <font-awesome-icon
              icon="book-open"
              class="text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
            />
            <div class="right">
              Blog
            </div>
          </a>
        </li>
        <li>
          <a class="tooltip" href="#">
            <font-awesome-icon
              icon="code"
              class="text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
            />
            <div class="right">
              Kod Parçaları
            </div>
          </a>
        </li>
        <li>
          <a class="tooltip" href="#">
            <font-awesome-icon
              icon="tags"
              class="text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
            />
            <div class="right">
              Etiketler
            </div>
          </a>
        </li>
        <li>
          <a class="tooltip" href="#">
            <font-awesome-icon
              icon="coffee"
              class="  text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
            />
            <div class="right ">
              Kahve
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="absolute w-11/12 ml-24 z-0 mt-12">
      <div class="text-white text-4xl text-left font-bold">
        Quick Snippets and Code Samples
      </div>
      <hr class="border-dashed border-2 border-gray-600" />
    </div>
    <div class="mt-40 m-auto mb-8">
      <div
        class="transition duration-500 ease-in-out bg-softbg hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-105 ... mt-8 text-left max-w-2xl rounded shadow-lg"
      >
        <div class="px-6 py-4">
          <div class="font-bold text-xl text-white mb-2">
            The Coldest Sunset
          </div>
          <p class="font-mono text-lg text-contentcolor text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
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
      <div
        class="transition duration-500 ease-in-out bg-softbg hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-105 ... mt-8 text-left max-w-2xl rounded shadow-lg"
      >
        <div class="px-6 py-4">
          <div class="font-bold text-xl text-white mb-2">
            The Coldest Sunset
          </div>
          <p class="font-mono text-lg text-contentcolor text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
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
.tooltip {
  display: inline-block;
  position: relative;

  text-align: left;
}

.tooltip .right {
  top: 80%;
  left: 100%;
  margin-left: 20px;
  transform: translate(0, -50%);
  padding: 10px 20px;
  color: #ffffff;
  background-color: #777777;
  font-weight: normal;
  font-size: 12px;

  position: absolute;
  z-index: 99999999;
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: visibility 0s, opacity 0.4s linear;
}

.tooltip:hover .right {
  opacity: 100;
  transition: visibility 0s, opacity 0.1s linear;
}

.tooltip .right i {
  position: absolute;
  top: 80%;
  right: 100%;
  margin-top: -12px;
  width: 12px;
  height: 24px;
  overflow: hidden;
}

.tooltip .right i::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  left: 0;
  top: 80%;
  transform: translate(50%, -50%) rotate(-45deg);
  background-color: #777777;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}
</style>
