<script lang="ts">
	let { icon, url, alt }: { icon: string; url: string; alt: string } = $props();
</script>

<a href={url} target="_blank">
	<img src={icon} {alt} class="" />
</a>

<style>
	img {
		image-rendering: optimizeSpeed;
		image-rendering: -moz-crisp-edges;
		image-rendering: -o-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: optimize-contrast;
		-ms-interpolation-mode: nearest-neighbor;

        scale: 1.5;
	}
</style>
