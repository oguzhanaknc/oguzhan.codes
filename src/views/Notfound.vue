<template>
	<div class="flex min-h-screen min-w-fulll bg-hardbg overflow-auto">
		<NavBar />
		<div class="m-auto text-white">
			<div class="mb-8 text-4xl">404 Error</div>
			<div class="mb-8 text-3xl">Bölye Bir Sayfa Bulunamadı</div>

			<font-awesome-icon :icon="ico" class="bg-wihte text-tomato text-max" />
		</div>
	</div>
</template>
<script>
import NavBar from '../components/NavBar';

import { faViruses } from '@fortawesome/free-solid-svg-icons';
export default {
	name: 'notfound',
	data: function() {
		return {
			ico: faViruses
		};
	},
	components: {
		NavBar
	}
};
</script>
