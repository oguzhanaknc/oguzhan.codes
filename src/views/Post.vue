<template>
	<div class="flex min-h-screen bg-hardbg overflow-auto">
		<NavBar />

		<pagetitle :title="slug" />
		<div class="absolute text-xl text-left md:ml-24 ml-4 z-0 mt-32">
			<div class="hljs" v-html="code"></div>
		</div>
	</div>
</template>

<script>
import NavBar from "../components/NavBar";
import pagetitle from "../components/pagetitle";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import Firebase from "firebase";

/* TODO: Firebase */

var db = Firebase.firestore();

export default {
	name: "Snippet",

	data: function() {
		return {
			slug: this.$route.params.slug,
			data: "",
			code: " Yükleniyor..."
		};
	},

	components: {
		NavBar,
		pagetitle
	},
	mounted() {
		marked.setOptions({
			renderer: new marked.Renderer(),
			highlight: function(code) {
				return hljs.highlightAuto(code).value;
			},
			pedantic: false,
			gfm: true,
			tables: true,
			breaks: false,
			sanitize: false,
			smartLists: true,
			smartypants: false,
			xhtml: false
		});

		db.collection("posts")
			.get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					if (doc.data().slug == this.slug) {
						let rep = doc.data().content.replace("_n", "\n");
						this.code = marked(rep);
					}
				});
			});
	}
};
</script>

<style lang="css" scoped></style>
