<template>
  <a :href="ref">
    <div class>
      <div
        class="w-64 sm:w-full transition duration-500 ease-in-out bg-softbg hover:bg-gray-600 cardh transform hover:-translate-y-1 hover:scale-105 mt-8 text-left max-w-lg rounded shadow-lg"
      >
        <img v-if="image != null" class="w-full" :src="image" alt="image" />
        <div v-if="language != null" class="w-40 text-lg text-contentcolor shadow-lg">
          <font-awesome-icon :icon="myicon" class="bg-wihte text-tomato text-4xl" />
          {{ language }}
        </div>
        <div class="px-6 py-4">
          <div class="text-xl text-white mb-2">{{ title }}</div>
          <p class="text-lg text-contentcolor">{{ checkedContent }}</p>
        </div>
        <div v-if="labelsprops != null" class="px-4 py-6">
          <div v-for="mlabel in labelsprops" :key="mlabel">
            <labels :title="mlabel" color="bg-tomato" />
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
//https://unixgame.io/unix50
import labels from "@/components/label";
import { faJs, faPython } from "@fortawesome/free-brands-svg-icons";
export default {
  name: "Card",
  props: {
    cotentIsAShort: Boolean,
    title: String,
    language: String,
    content: String,
    slug: String,
    icon: String,
    labelsprops: Array,
    image: String
  },
  components: {
    labels
  },
  computed: {
    myicon() {
      if (this.language == "Javascript") {
        return faJs;
      } else {
        return faPython;
      }
    },
    checkedContent() {
      if (!this.cotentIsAShort) {
        return this.content.substring(0, 289);
      } else {
        return this.content;
      }
    }
  },
  data: function() {
    return {
      ref: "post/" + this.slug
    };
  }
};
</script>

<style lang="css"></style>
