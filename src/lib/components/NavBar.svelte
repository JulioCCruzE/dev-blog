<script lang="ts">
	// export let data;
	import DarkmodeButton from './DarkmodeButton.svelte';
	import IconLink from './IconLink.svelte';
	import GithubIcon from './svg/GithubIcon.svelte';
	import MotherboardIcon from './svg/MotherboardIcon.svelte';
	import { browser } from '$app/environment';
	import { mobile } from '$lib/stores/mobile';
	import MenuButton from './MenuButton.svelte';
	// import PostListing from './PostListing.svelte';

	let innerWidth = 0;
	let clicked = false;
	// $mobile = true;

	// console.log(innerWidth);
	if (browser) {
		innerWidth = window.innerWidth;
		// console.log(innerWidth);
		$mobile = innerWidth >= 1024 ? false : true;
	}

	// $darkmode = true;
	function handleResize() {
		innerWidth = window.innerWidth;
		$mobile = innerWidth >= 1024 ? false : true;
	}

	// const handleClick = () => {
	// 	clicked = !clicked;
	// };

	const resetClick = () => {
		clicked = false;
	};
</script>

<!-- class="flex items-center justify-between max-w-5xl -->
<!--    mx-auto px-4 h-24" -->

<svelte:window bind:innerWidth on:resize={handleResize} on:load={handleResize} />
<nav class="navbar">
	<a href="/"> <MotherboardIcon class="w-14 h-14 fill-current" on:click={resetClick} /> </a>
	{#if !$mobile}
		<div
			class="text-lg border-b-2 border-b-black dark:border-b-white hover:bg-gray-100 dark:hover:bg-gray-800"
		>
			<a href="/oac" on:click={resetClick}>OAC</a>
		</div>
		<div
			class="text-lg border-b-2 border-b-black dark:border-b-white hover:bg-gray-100 dark:hover:bg-gray-800"
		>
			<a href="/quantum" on:click={resetClick}>Quantum</a>
		</div>
		<div
			class="text-lg border-b-2 border-b-black dark:border-b-white hover:bg-gray-100 dark:hover:bg-gray-800"
		>
			<a href="/robotics" on:click={resetClick}>Robotics</a>
		</div>
		<div
			class="text-lg border-b-2 border-b-black dark:border-b-white hover:bg-gray-100 dark:hover:bg-gray-800"
		>
			<a href="/publications" on:click={resetClick}>Publications</a>
		</div>
		<!-- <a href="/projects">Projects</a> -->
		<!-- <a href="/readings">Readings</a> -->
	{/if}
	<div class="flex space-x-1 items-center">
		<DarkmodeButton />

		<!-- <IconLink href="https://www.youtube.com/@joseanmartinez/featured" target="_blank"> -->
		<!-- 	<YoutubeIcon class="w-8 h-8 fill-current" /> -->
		<!-- </IconLink> -->

		<IconLink href="https://github.com/JulioCCruzE" target="_blank">
			<GithubIcon class="w-8 h-8 fill-current" />
		</IconLink>
		{#if $mobile}
			<MenuButton />
		{/if}
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 64rem;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
		height: 6rem;
	}
</style>
