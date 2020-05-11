<template>
	<div class="flex min-h-screen min-w-fulll bg-hardbg overflow-auto">
		<NavBar />

		<div class="m-auto form text-white bg-softbg p-6 my-10 relative">
			<div
				class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
				style="left:-40px"
			>
				<i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i>
			</div>
			<h3 class="text-2xl text-gray-900 font-semibold">Yeni Yazı Paylaş</h3>
			<div class="text-hardbg">
				<div class="flex space-x-5 mt-3">
					<input
						type="text"
						name=""
						id=""
						placeholder="Başlık"
						class="border p-2  w-1/2"
						v-model="post.title"
					/>
					<input
						type="tel"
						name=""
						id=""
						placeholder="Slug"
						class="border p-2 w-1/2"
						v-model="post.slug"
					/>
				</div>
				<div class="flex space-x-5 mt-3">
					<input
						type="text"
						name=""
						id=""
						placeholder="Yazılım Dili"
						class="border p-2  w-1/2"
						v-model="post.language"
					/>
					<select
						class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						v-model="post.type"
					>
						<option selected disabled>Paylaşım türü</option>
						<option>Snippet</option>
						<option>Post</option>
					</select>
				</div>
				<textarea
					v-model="post.short"
					name=""
					id=""
					placeholder="İçerik Özeti"
					class="border p-2 w-full mt-3"
				>
				</textarea>
				<textarea
					name=""
					id=""
					v-model="post.content"
					placeholder="İçerik"
					class="border p-2 mt-3 w-full"
				></textarea>
			</div>
			<button
				class="border-2  border-tomato mt-2 mr-4 text-lg h-10 w-32 hover:bg-tomato hover:text-white w-full"
				@click="send"
			>
				Gönder
			</button>
			<button
				class="border-2  border-indigo mt-2 mr-4 text-lg h-10 w-32 hover:bg-indigo hover:text-white w-full"
				@click="send"
			>
				Önizle
			</button>
		</div>
	</div>
</template>
<script>
import * as utils from "../utils/index";
import NavBar from "../components/NavBar";

export default {
	name: "admin",
	data: function() {
		return {
			post: {
				title: "",
				language: "",
				slug: "",
				content: "",
				type: "sadf",
				short: ""
			}
		};
	},
	components: {
		NavBar
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
	}
};
</script>
