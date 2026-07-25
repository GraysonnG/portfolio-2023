<script lang="ts">
  let { url }: { url: string } = $props();
</script>

<meta name="url" content={url} />
<meta name="og:url" content={url} />
<meta name="twitter:url" content={url} />
