<script lang="ts">
	import MetaDescription from "./MetaDescription.svelte"
	import MetaIcon from "./MetaIcon.svelte";
  import MetaTitle from "./MetaTitle.svelte"
	import MetaUrl from "./MetaUrl.svelte";

  export let title: string
  export let description: string
  export let url = "https://blanktheevil.com"
  export let og_icon = "https://next-api-server.vercel.app/api/og/bte"
</script>

<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="theme-color" content="#8800ff" />
<meta name="twitter:card" content="summary_large_image" />

<MetaTitle {title} />
<MetaDescription {description} />
<MetaUrl {url} />
<MetaIcon icon={og_icon} />