<script>
	// import LottiePlayer from '$lib/components/LottiePlayer.svelte';
	import Pixi from '$lib/components/Pixi.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="h-full w-full overflow-hidden">
	<Pixi />
	<!--  bg-base-200 -->
	<div class="hero absolute top-0 z-10 min-h-screen">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="title text-8xl font-bold">Leah</h1>
				<p class="py-6">Under Construction :3</p>
				<!-- <LottiePlayer
          src="https://lottie.host/0cbdb3ef-2fa5-4d1d-9e4e-f66c879e010d/D0bRr9d93F.lottie"
        /> -->
				<div class="join">
					<a class="btn frosted-glass join-item hover:btn-primary drop-shadow-md hover:drop-shadow-xl" href="https://blog.leahdevs.xyz/"
						><Icon icon="mage:camera-fill" height="2rem" />Blog</a
					>
					<a
						class="btn frosted-glass join-item hover:btn-primary drop-shadow-md hover:drop-shadow-xl"
						href="https://ko-fi.com/chaotickitsune"
						><Icon icon="mage:cup-hot-fill" height="2rem" />Kofi</a
					>
					<a
						class="btn frosted-glass join-item hover:btn-primary drop-shadow-md hover:drop-shadow-xl "
						href="https://github.com/ChaoticLeah"
						><Icon icon="mage:note-with-text-fill" height="2rem" />Github</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
