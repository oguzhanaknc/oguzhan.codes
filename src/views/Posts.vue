<template>
  <div class="flex min-h-screen bg-hardbg overflow-auto">
    <NavBar />
    <pagetitle title="En Son Blog Yazıları" />
    <div
      class="mt-48 mb-8 m-auto justify-center md:mt-40 flex flex-wrap container"
    >
      <Card
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione,
			velit quos a quisquam aspernatur placeat natus laudantium, neque illum
			molestias! Inventore officia aspernatur perspiciatis atque, harum dolor
			delectus beatae?"
        class="mr-8"
        image="https://image.freepik.com/free-vector/sunset-mountains-with-pine-forest_7993-2327.jpg"
        title="Bir Yazı Başlığı"
        :labelsprops="labels"
      />
      <Card
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione,
			velit quos a quisquam aspernatur placeat natus laudantium, neque illum
			molestias! Inventore officia aspernatur perspiciatis atque, harum dolor
			delectus beatae?"
        class="mr-8"
        image="https://image.freepik.com/free-vector/sunset-mountains-with-pine-forest_7993-2327.jpg"
        title="Bir Yazı Başlığı"
      />
      <Card
        class="mr-8"
        image="https://image.freepik.com/free-vector/sunset-mountains-with-pine-forest_7993-2327.jpg"
        title="Bir Yazı Başlığı"
      />
      <Card
        class="mr-8"
        image="https://image.freepik.com/free-vector/sunset-mountains-with-pine-forest_7993-2327.jpg"
        title="Bir Yazı Başlığı"
      />
    </div>
  </div>
</template>

<script>
import pagetitle from "@/components/pagetitle";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
export default {
  name: "posts",
  components: {
    Card,
    NavBar,
    pagetitle
  },
  data: function() {
    return {
      labels: ["label", "labels"]
    };
  }
};
</script>

<style scoped></style>
