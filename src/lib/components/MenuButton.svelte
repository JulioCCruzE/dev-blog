<script lang="ts">
	import ListIcon from './svg/ListIcon.svelte';

	let clicked = false;

	const handleClick = () => {
		clicked = !clicked;
	};

	const resetClick = () => {
		clicked = false;
	};
</script>

<button
	class={clicked
		? 'p-2 rounded-lg text-gray-700 bg-gray-100 dark:text-white dark:bg-gray-800'
		: 'p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800'}
	on:click={handleClick}
>
	<div><ListIcon class="w-8 h-8 fill-current" /></div>
</button>
<aside class="bg-white dark:bg-dark-background" class:clicked>
	<a class="p-2 border-b dark:border-gray-800" href="/oac" on:click={resetClick}>OAC</a>
	<a class="p-2 border-b dark:border-gray-800" href="/robotics" on:click={resetClick}>Robotics</a>
	<a class="p-2 border-b dark:border-gray-800" href="/publications" on:click={resetClick}
		>Publications</a
	>
</aside>

<style>
	aside {
		position: absolute;
		display: flex;
		align-items: left;
		justify-content: space-between;
		max-height: 64rem;
		margin-left: auto;
		margin-right: auto;
		padding: 1rem;
		right: -200px;
		top: 6rem;
		transition: all 0.5s;
		width: 200px;
		border: 2px solid #999;
		/* background-color: #efefef; */
		flex-direction: column;
	}
	.clicked {
		right: 0px;
	}
</style>
