<template>
  <div class="flex min-h-screen bg-hardbg overflow-auto">
    <NavBar />
    <pagetitle title="En Son Blog Yazıları" />
    <div
      class="mt-48 mb-8 m-auto justify-center md:mt-40 flex flex-wrap container"
    >
      <Card
        v-for="post in posts"
        :key="post.slug"
        :content="post.short"
        class="mr-8"
        :image="post.image"
        :title="post.title"
        :slug="post.slug"
      />
    </div>
  </div>
</template>

<script>
import pagetitle from "@/components/pagetitle";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import * as utils from "../utils/index.js";
export default {
  name: "posts",
  components: {
    Card,
    NavBar,
    pagetitle
  },
  data: function() {
    return {
      posts: []
    };
  },
  created() {
    utils.db
      .collection("posts")
      .where("type", "==", "Post")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.posts.push(doc.data());
        });
        this.posts.reverse();
      });
    document.title = "blog yazıları";
  },
  metaInfo() {
    return {
      title: "Snippets - Oğuzhan Akıncı",
      meta: [
        {
          name: "description",
          content:
            "Düzenli olarak paylaştığım blog yazıları ile ile kendimi geliştirirken sıfırdan başlayanlara yardımcı olmaya çalışıyorum. Yeni teknolojileri anlatmaya çalışıyorum."
        },
        { property: "og:site_name", content: "Oğuzhan Akıncı" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" }
      ]
    };
  }
};
</script>

<style scoped></style>
