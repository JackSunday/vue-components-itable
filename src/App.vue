<template>
	<div>
        <Home/>
    </div>
</template>

<script>
import Home from "./views/Home.vue"
export default {
	name: 'App',
	components: {
		Home,
	},
	data() {
		return {
			aa: '努力就可以了',
		}
	},
}
</script>
