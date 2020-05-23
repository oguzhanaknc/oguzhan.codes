<template>
  <div class="flex min-h-screen bg-hardbg overflow-auto">
    <NavBar />

    <pagetitle :title="title" />
    <div class="h-full text-xl text-left md:ml-24 ml-4 z-0 mt-32">
      <div class="hljs transparent" v-html="code"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import pagetitle from "../components/pagetitle";
import * as utils from "../utils/index";

export default {
  name: "Snippet",

  data() {
    return {
      slug: this.$route.params.slug,
      data: "",
      code: " Yükleniyor...",
      title: "",
      short: ""
    };
  },

  components: {
    NavBar,
    pagetitle
  },
  created() {
    utils.db
      .collection("posts")
      .where("slug", "==", this.slug)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.size != 1) {
          window.location.replace("/404");
        }

        querySnapshot.forEach(doc => {
          this.code = utils.j2m(doc.data().content);
          this.title = doc.data().title;
          this.short = doc.data().short;
        });
      });
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          name: "description",
          content: this.short
        },
        { property: "og:site_name", content: "Oğuzhan Akıncı" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.transparent {
  background-color: transparent !important;
}
</style>
