<template>
  <div
    class="md:w-full w-16 md:h-18 home text-white"
    @mouseover="mouseover()"
    @mouseleave="mouseleave()"
  >
    <div v-if="!isover">
      <a href="/">
        <img class="md:w-full w-16 md:h-16" v-bind:src="require('../../public/' + img)" alt="yok" />
      </a>
    </div>
    <div class="text-3xl" v-if="isover">
      <a href="#">
        <font-awesome-icon icon="house-damage" />
        <div class="text-xs">V0.1.1</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "homebutton",
  data: function() {
    return { img: "giphy2.gif", isover: true };
  },
  methods: {
    mouseover: function() {
      this.isover = false;
    },
    mouseleave: function() {
      this.isover = true;
    }
  }
};
</script>
