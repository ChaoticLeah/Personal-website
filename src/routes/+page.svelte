<script lang="ts">
	import Background from '$lib/components/Background.svelte';

	// import LottiePlayer from '$lib/components/LottiePlayer.svelte';
	import FriendIcon from '$lib/components/FriendIcon.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import FriendsModal from '$lib/components/modals/FriendsModal.svelte';
	import Pixi from '$lib/components/Pixi.svelte';
	import Typewriter from '$lib/components/Typewriter.svelte';
	// @ts-ignore
	import { defineHyfetch } from '$lib/hyfetch-easteregg';
	import { onMount } from 'svelte';

	let friendsModal: FriendsModal;

	let typewriter: Typewriter;

	let subtitle = $state('Under Construction :3');

	const titleClickMessages = ['hehe that tickles', ':3', 'Heyyy!', 'Meoww meoww']

	onMount(() => {
		defineHyfetch();
	});
</script>

<div class="h-full w-full overflow-hidden">
	<Background />
	<Pixi />
	<!--  bg-base-200 -->
	<div class="hero absolute top-0 z-10 min-h-screen pointer-events-none">
		<div class="hero-content text-center">
			<div class="max-w-md  pointer-events-auto">
				<button
					class="title text-8xl font-bold transition-all duration-1000 hover:translate-y-[-4rem] hover:drop-shadow-glowtrans"
					aria-label="Click to reset the typewriter effect and change the subtitle"
					onclick={() => {
						subtitle = titleClickMessages[Math.floor(Math.random() * titleClickMessages.length)];
						typewriter.reset();
					}}
				>
					Leah
				</button>
				<Typewriter bind:this={typewriter} className="py-6" text={subtitle} speed={50} />
				<!-- <LottiePlayer
          src="https://lottie.host/0cbdb3ef-2fa5-4d1d-9e4e-f66c879e010d/D0bRr9d93F.lottie"
        /> -->
				<div class="join">
					<LinkButton
						text="Blog"
						icon="mage:camera-fill"
						link="https://blog.leahdevs.xyz"
						className="hover:drop-shadow-glowblue"
					/>
					<LinkButton
						text="Kofi"
						icon="mage:cup-hot-fill"
						link="https://ko-fi.com/chaotickitsune"
						className="hover:drop-shadow-glow"
					/>
					<LinkButton
						text="Github"
						icon="mage:note-with-text-fill"
						link="https://github.com/ChaoticLeah"
						className="hover:drop-shadow-glowpink"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="absolute bottom-0 z-20 flex w-full justify-center">
		<button class="btn btn-link text-accent" onclick={friendsModal.open}>88x31's</button>
	</div>
	<FriendsModal bind:this={friendsModal} />
</div>
