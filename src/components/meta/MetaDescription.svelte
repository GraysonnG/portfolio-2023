<script lang="ts">
	let { description }: { description: string } = $props();
</script>

<meta name="description" content={description} />
<meta name="og:description" content={description} />
<meta name="twitter:description" content={description} />
