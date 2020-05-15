<script>
import * as utils from "../utils/index";
import NavBar from "../components/NavBar";
import Card from "@/components/Card";
export default {
  name: "admin",
  data: function() {
    return {
      posts: []
    };
  },
  components: {
    Card,
    NavBar
  },
  computed: {
    ref: function(slug) {
      return "/post/" + slug + "/edit";
    }
  },
  created() {
    utils.db
      .collection("posts")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.posts.push(doc.data());
        });
        this.posts.reverse();
      });
  }
};
</script>
<template>
  <div class="flex min-h-screen min-w-fulll bg-hardbg overflow-auto">
    <NavBar />
    <div class="mt-24 mb-8 m-auto ml-24 md:mt-16 flex flex-wrap container">
      <div
        v-for="post in posts"
        :key="post.slug"
        class="w-1/5 mr-8 h-10 border-2 border-white"
      >
        <button
          class="mr-5 border-2 p-1 border-tomato w-16 hover:bg-tomato hover:text-white"
        >
          Sil
        </button>
        <a :href="'/post/' + post.slug + '/edit'">
          <button
            class="border-2 p-1 border-indigo w-16 hover:bg-indigo hover:text-white"
          >
            Düzenle
          </button></a
        >

        <Card
          :key="post.title"
          :language="post.language"
          :title="post.title"
          :content="post.short"
          :slug="post.slug"
        />
      </div>
    </div>
  </div>
</template>
