<script lang="ts">
	import Icon from "@iconify/svelte";

    let { icon, text, link, className }: { icon: string, text: string, link: string, className?: string } = $props();
</script>
<!-- hover:drop-shadow-glow  -->
<a
	class="frosted-glass btn join-item transition-all duration-500 hover:btn-primary {className}"
	href={link}><Icon icon={icon} height="2rem" />{text}</a
>
