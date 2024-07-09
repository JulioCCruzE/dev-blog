<script lang="ts">
	import type { MarkdownPostMetadataAndSlug } from '../../types';
	import { formatPublishedAt } from '$lib/utils/dates';

	export let post: MarkdownPostMetadataAndSlug;

	// let href = `/blog/publications/${post.slug}`;
	// let youtubeHref = post.metadata.youtubeId ? `https://youtu.be/${post.metadata.youtubeId}` : '';
</script>

<article class="p-4 sm:flex sm:space-x-4">
	<!-- <a {href} class="block sm:w-80"> -->
	<!-- 	<div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"> -->
	<!-- 		<img src={post.metadata.imgUrl} alt={post.metadata.title} class="object-cover" /> -->
	<!-- 	</div> -->
	<!-- </a> -->

	<div class="flex-1 py-2 sm:py-0">
		<!-- <a {href}> -->
		<p class="py-2 font-light">
			{post.metadata.author}
		</p>
		<h3 class="text-xl font-medium mb-1">
			{post.metadata.title}
		</h3>
		<p class="py-2 font-light">
			{post.metadata.summary}
		</p>
		<p class="font-light text-gray-60 dark:text-gray-300">
			<span>Published:</span>
			<time datetime={post.metadata.publishedAt}>
				{formatPublishedAt(post.metadata.publishedAt)}
			</time>
		</p>

		<!-- </a> -->
		{#if post.metadata.PDFlink}
			<p>
				Download: <a href={post.metadata.PDFlink} class="p-2 text-purple-800 dark:text-yellow-200"
					>[PDF]</a
				>
			</p>
		{/if}

		{#if post.metadata.DOI}
			<p>
				DOI: <a href={post.metadata.DOI} class="p-2 text-purple-800 dark:text-yellow-200"
					>{post.metadata.DOI}</a
				>
			</p>
		{/if}
	</div>
</article>
