<script>
import NavBar from "@/components/NavBar";
import * as utils from "@/utils/index";
export default {
  components: {
    NavBar
  },
  data: function() {
    return {
      preview: true,

      post: {
        title: "",
        slug: "",
        language: "",
        image: "",
        type: "",
        short: "",
        content: "Yükleniyor..."
      }
    };
  },
  computed: {
    preview_text: function() {
      return utils.justMarkdown(this.post.content);
    }
  },
  methods: {
    send: function() {
      utils.m2j(this.post.content).then(mcontent => {
        this.post.content = mcontent;
        utils.db
          .collection("posts")
          .doc(this.post.slug)
          .set(this.post);
        console.log(this.post.content);
      });
    }
  },
  created() {
    let slug = this.$route.params.slug;
    utils.db
      .collection("posts")
      .where("slug", "==", slug)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.size != 1) {
          window.location.replace("/404");
        }

        querySnapshot.forEach(doc => {
          this.post = doc.data();
          this.post.content = utils.j2m(doc.data().content, true);
        });
      });
  }
};
</script>
<template>
  <div class=" min-h-screen min-w-fulll bg-hardbg overflow-auto">
    <NavBar />

    <div class=" m-auto grid grid-cols-3 gap-4">
      <div class="ml-24 col-span-2 h-full w-full  text-white ">
        <textarea
          v-model="post.content"
          class="caret-tomato text-white bg-hardbg mt-24 h-full w-full "
          v-if="preview"
        />
        <div
          v-if="!preview"
          v-html="preview_text"
          class=" text-left text-contentcolor mt-24 h-full w-full "
        ></div>
      </div>
      <div class="mt-24 bg-softbg h-full  col-span-1 ml-20 w-6/5 text-tomato">
        <div class=" ">Yazı Başlığı<br /><input v-model="post.title" /></div>
        <div class="mt-2">Slug<br /><input v-model="post.slug" /></div>
        <div class="mt-2">
          Yazılım Dili<br /><input v-model="post.language" />
        </div>
        <div class="mt-2 ">
          Öne Çıkartılan Görsel<br /><input
            placeholder="URL"
            class="text-center"
            v-model="post.image"
          />
        </div>

        <select v-model="post.type" class="mt-4 w-3/5">
          <option disabled value="saab">Paylaşım Türü</option>
          <option value="Post">Post</option>
          <option value="Snippet">Snippet</option>
        </select>
        <div class="mt-2">
          Özet<br /><textarea v-model="post.short" class="h-" />
        </div>
        <button
          @click="send"
          class="border-2 border-tomato p-1 w-24 hover:bg-tomato hover:text-white"
        >
          Gönder
        </button>
        <button
          @click="preview = !preview"
          class="border-2 border-indigo  p-1 w-24 hover:bg-indigo  text-indigo  hover:text-white"
        >
          Önizle
        </button>
      </div>
    </div>
  </div>
</template>
