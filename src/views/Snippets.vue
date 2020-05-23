<template>
  <div class="flex min-h-screen bg-hardbg overflow-auto">
    <NavBar />>
    <pagetitle title="Kod Parçaları ve Örnekleri" />
    <div class="mt-48 m-auto mb-8 md:mt-40">
      <Card
        v-for="post in posts"
        :key="post.title"
        :language="post.language"
        :title="post.title"
        :content="post.short"
        :slug="post.slug"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "../css/tailwind.css";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import pagetitle from "../components/pagetitle";
import * as utils from "../utils/index";

export default {
  name: "Snippets",

  data: function() {
    return {
      posts: []
    };
  },
  components: {
    Card,
    NavBar,
    pagetitle
  },
  created() {
    utils.db
      .collection("posts")
      .where("type", "==", "Snippet")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.posts.push(doc.data());
        });
        this.posts.reverse();
      });
    document.title = "Kod Parçaları";
  }
};
</script>
<style scoped></style>
