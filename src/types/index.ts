import type { ComponentType } from 'svelte';

export type MarkdownPost = {
	metadata: {
		title: string;
		imgUrl: string;
		youtubeId?: string;
		publishedAt: string;
		summary: string;
		PDFlink?: string;
		DOI?: string;
		ISBN?: string;
		author: string;
	};
	default: ComponentType;
};

export type MarkdownPostMetadataAndSlug = {
	slug: string;
	metadata: MarkdownPost['metadata'];
};
