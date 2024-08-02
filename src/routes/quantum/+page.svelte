<script lang="ts">
	import QuantumHeader from '$lib/components/QuantumHeader.svelte';
	import QuantumListing from '$lib/components/QuantumListing.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<QuantumHeader />

<section class="pb-6">
	<header
		class="inline-block border-b dark:border-gray-700
    py-2 mx-4 mb-4"
	>
		<h2 class="text-3xl font-semibold">Posts</h2>
	</header>

	<section class="divide-y dark:divide-gray-700">
		{#each data.posts as post}
			<QuantumListing {post} />
		{/each}
	</section>
</section>
