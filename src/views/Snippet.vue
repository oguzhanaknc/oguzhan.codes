<template>
  <div class="flex min-h-screen bg-hardbg overflow-auto">
    <NavBar />
    <pagetitle :title="slug" />
    <div class="absolute text-xl text-left md:ml-24 ml-4 z-0 mt-32">
      <div class="hljs" v-html="code"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import pagetitle from "../components/pagetitle";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default {
  name: "Snippet",

  data: function() {
    return {
      slug: this.$route.params.slug,
      code:
        "```javascript\nlet me = see.you\n```\n # selam \n   Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo ducimus dolorum expedita perferendis nisi officiis vel itaque vero eveniet, corporis velit accusantium in laborum nihil sed dolores. Et, tempore.  \n **garip** \n *iyice*",
    };
  },

  components: {
    NavBar,
    pagetitle,
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    this.code = marked(this.code);
  },
};
</script>

<style lang="css" scoped></style>
