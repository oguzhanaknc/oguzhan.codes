<template>
	<div class="flex min-h-screen bg-hardbg overflow-auto">
		<NavBar />

		><pagetitle title="Kod Parçaları ve Örnekleri" />
		<div class="mt-48 m-auto mb-8 md:mt-40">
			<Card
				v-for="post in posts"
				:key="post.title"
				:language="post.language"
				:title="post.title"
				:content="post.short"
				:slug="post.slug"
				:labelsprops="post.label"
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
import Firebase from "firebase";

/* TODO: Firebase */

var db = Firebase.firestore();

export default {
	name: "Snippets",

	data: function() {
		return {
			labels: ["javascript", "snippet"],
			posts: []
		};
	},
	components: {
		Card,
		NavBar,
		pagetitle
	},
	created() {
		db.collection("posts")
			.get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					// doc.data() is never undefined for query doc snapshots
					this.posts.push(doc.data());
				});
			});
	}
};
</script>
<style scoped></style>
