<template>
  <div class="flex min-h-screen bg-hardbg overflow-auto">
    <NavBar />
    <pagetitle :title="slug" />
    <div class="ml-64"></div>
    <div class="text-white" v-markdown>{{ markdown }}</div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import pagetitle from "../components/pagetitle";
import Prism from "vue-prism-component";
export default {
  name: "Snippet",

  data: function() {
    return {
      slug: this.$route.params.slug,
      markdown: "# var l = yes\n"
    };
  },
  components: {
    NavBar,
    pagetitle,
    // eslint-disable-next-line vue/no-unused-components
    Prism
  }
};
</script>

<style lang="css" scoped></style>
