<template>
  <div class="flex min-h-screen bg-hardbg overflow-auto">
    <NavBar />
    <pagetitle title="Kod Parçaları ve Örnekleri" />
    <div class="mt-48 m-auto mb-8 md:mt-40">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "../css/tailwind.css";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import pagetitle from "../components/pagetitle";
export default {
  name: "Snippets",

  components: {
    Card,
    NavBar,
    pagetitle
  }
};
</script>
<style scoped></style>
