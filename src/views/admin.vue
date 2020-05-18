<script>
import * as utils from "../utils/index";
import NavBar from "../components/NavBar";

export default {
  name: "admin",
  data: function() {
    return {
      posts: []
    };
  },
  components: {
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
    //utils.name("oguzhanaknc06@gmail.com", "Nomagic06");
  }
};
</script>
<template>
  <div class="flex min-h-screen min-w-fulll bg-hardbg overflow-auto">
    <NavBar />
    <div class="mt-24 mb-8 m-auto ml-24 md:mt-16 flex flex-wrap container">
      <div class="inline-block relative w-64 border-2 border-white h-32 p-2">
        <div class="text-white">Snippets</div>
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option selected disabled>Gönderiler</option>
          <option :value="post.slug" v-for="post in posts" :key="post.slug">{{ post.title }}</option>
        </select>

        <div class="mt-2">
          <button
            class="border-2 text-tomato border-tomato mr-2 p-1 w-24 hover:bg-tomato hover:text-white"
          >Sil</button>
          <button
            class="border-2 border-indigo p-1 w-24 hover:bg-indigo text-indigo hover:text-white"
          >Düzenle</button>
        </div>
      </div>
      <div class="inline-block relative w-64 border-2 border-white h-32 p-2 ml-8">
        <div class="text-white">Posts</div>
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option selected disabled>Gönderiler</option>
          <option :value="post.slug" v-for="post in posts" :key="post.slug">{{ post.title }}</option>
        </select>

        <div class="mt-2">
          <button
            class="border-2 text-tomato border-tomato mr-2 p-1 w-24 hover:bg-tomato hover:text-white"
          >Sil</button>
          <button
            class="border-2 border-indigo p-1 w-24 hover:bg-indigo text-indigo hover:text-white"
          >Düzenle</button>
        </div>
      </div>
      <div class="inline-block relative w-64 border-2 border-white h-32 p-2 ml-8">
        <div class="text-white">Posts</div>
        <input
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        />

        <div class="mt-2">
          <button
            class="border-2 border-indigo p-1 w-24 hover:bg-indigo text-indigo hover:text-white"
          >Ara</button>
        </div>
      </div>
      <div class="inline-block relative w-64 border-2 border-white h-32 p-2 ml-8">
        <div class="text-white">Type</div>

        <div class="mt-2">
          <input
            disabled
            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            disabled
            class="m-2 border-2 w-24 border-indigo p-1 hover:bg-indigo text-indigo hover:text-white"
          >Ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>
