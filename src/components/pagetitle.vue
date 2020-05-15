<template>
  <div class="absolute w-11/12 md:ml-24 ml-4 z-0 mt-12">
    <div class="text-white text-4xl text-left font-bold">{{ title }}</div>
    <hr class="border-dashed border-2 border-gray-600 max-w-xl" />
  </div>
</template>

<script>
export default {
  name: "pagetitle",
  props: ["title"]
};
</script>

<style lang="css"></style>
