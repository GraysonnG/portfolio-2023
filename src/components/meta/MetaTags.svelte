<script lang="ts">
	import MetaDescription from './MetaDescription.svelte';
	import MetaIcon from './MetaIcon.svelte';
	import MetaTitle from './MetaTitle.svelte';
	import MetaUrl from './MetaUrl.svelte';

	interface Props {
	  title: string;
	  description: string;
	  url?: string;
	  og_icon?: string;
	}

	let { title, description, url = 'https://blanktheevil.com', og_icon = 'https://next-api-server.vercel.app/api/og/bte' }: Props = $props()
</script>

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="theme-color" content="#8800ff" />
<meta name="twitter:card" content="summary_large_image" />
<meta http-equiv="X-Content-Type-Options" content="nosniff" />
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
<meta http-equiv="X-Frame-Options" content="DENY" />

<MetaTitle {title} />
<MetaDescription {description} />
<MetaUrl {url} />
<MetaIcon icon={og_icon} />
