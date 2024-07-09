<script lang="ts">
	// import HomeHeader from '$lib/components/HomeHeader.svelte';
	import RoboticsHeader from '$lib/components/RoboticsHeader.svelte';
	import RoboticsListing from '$lib/components/RoboticsListing.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<RoboticsHeader />

<section class="pb-6">
	<header
		class="inline-block border-b dark:border-gray-700
    py-2 mx-4 mb-4"
	>
		<h2 class="text-3xl font-semibold">Videos</h2>
	</header>

	<section class="divide-y dark:divide-gray-700">
		{#each data.posts as post}
			<RoboticsListing {post} />
		{/each}
	</section>
</section>
