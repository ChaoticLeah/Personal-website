<script lang="ts">
	//@ts-ignore
	import { Application } from 'pixi.js';
	let div: HTMLDivElement;
	// Asynchronous IIFE
	(async () => {})();
	$effect(() => {
		if (!div) return;
		(async () => {
			const app = new Application({
				width: 800,
				height: 600,
				backgroundColor: 0x1099bb,
				resolution: window.devicePixelRatio || 1
			});

			// Intialize the application.
			await app.init({ background: '#1099bb', resizeTo: window });

			// Then adding the application's canvas to the DOM body.
			div.appendChild(app.canvas);
		})();

		// div.appendChild(app.view);
	});
</script>

<div bind:this={div}></div>
