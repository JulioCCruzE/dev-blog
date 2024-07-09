<script lang="ts">
	import PublicationsHeader from '$lib/components/PublicationsHeader.svelte';
	import PublicationsListing from '$lib/components/PublicationsListing.svelte';
	// import RoboticsListing from '$lib/components/RoboticsListing.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<PublicationsHeader />

<section class="pb-6">
	<header
		class="inline-block border-b dark:border-gray-700
    py-2 mx-4 mb-4"
	>
		<h2 class="text-3xl font-semibold">Papers</h2>
	</header>

	<section class="divide-y dark:divide-gray-700">
		{#each data.posts as post}
			<PublicationsListing {post} />
		{/each}
	</section>
</section>
