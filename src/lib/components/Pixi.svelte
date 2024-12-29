<script lang="ts">
	//@ts-ignore
	import { Application, Assets, MeshRope, Point, Texture } from 'pixi.js';
	//@ts-ignore
	import * as particles from '@pixi/particle-emitter';
	import { Container } from '@pixi/display';
	import { onMount } from 'svelte';

	// const { Container, ParticleContainer, Renderer, Ticker } = PIXI;

	let div: HTMLDivElement;
	// // Asynchronous IIFE
	// (async () => {})();
	// $effect(() => {

	// });

	onMount(() => {
		// Mouse position variable.
		// let mousePosition = { x: 0, y: 0 };

		// // Track mouse movements.
		// window.addEventListener('mousemove', (event) => {
		// 	mousePosition = { x: event.clientX, y: event.clientY };
		// });

		if (!div) return;
		(async () => {
			const app = new Application();

			// Intialize the application.
			await app.init({
				backgroundAlpha: 0,
				resizeTo: window,
				resolution: window.devicePixelRatio || 1
			});

			// Then adding the application's canvas to the DOM body.
			div.appendChild(app.canvas);

			// Load the texture for the trail
			const trailTexture = await Assets.load('trail.png');

			const historyX: number[] = [];
			const historyY: number[] = [];
			const historySize = 20; // Determines how long the trail will be
			const ropeSize = 100; // Determines how smooth the trail will be
			const points: Point[] = [];

			// Create history arrays to store mouse positions
			for (let i = 0; i < historySize; i++) {
				historyX.push(0);
				historyY.push(0);
			}

			// Create an array of points for the rope to follow
			for (let i = 0; i < ropeSize; i++) {
				points.push(new Point(0, 0));
			}

			// Create the MeshRope object
			const rope = new MeshRope({ texture: trailTexture, points });
			rope.blendMode = 'add'; // Additive blend mode to make the trail brighter
			app.stage.addChild(rope);

			let mousePosition: { x: number; y: number } | null = null;

			// Set up mousemove event listener
			app.stage.eventMode = 'static';
			app.stage.hitArea = app.screen;
			app.stage.on('mousemove', (event) => {
				mousePosition = { x: event.global.x, y: event.global.y };
			});

			// Animation loop to update the trail
			app.ticker.add(() => {
				if (!mousePosition) return;

				// Update the history arrays with the current mouse position
				historyX.pop();
				historyX.unshift(mousePosition.x);
				historyY.pop();
				historyY.unshift(mousePosition.y);

				// Update the points for the rope to follow
				for (let i = 0; i < ropeSize; i++) {
					const p = points[i];

					// Smooth the trail using cubic interpolation
					const ix = cubicInterpolation(historyX, (i / ropeSize) * historySize);
					const iy = cubicInterpolation(historyY, (i / ropeSize) * historySize);

					p.x = ix;
					p.y = iy;
				}
			});

			// Cubic interpolation function to smooth the trail
			function clipInput(k: number, arr: number[]): number {
				if (k < 0) k = 0;
				if (k > arr.length - 1) k = arr.length - 1;
				return arr[k];
			}

			function getTangent(k: number, factor: number, array: number[]): number {
				return (factor * (clipInput(k + 1, array) - clipInput(k - 1, array))) / 2;
			}

			function cubicInterpolation(array: number[], t: number, tangentFactor = 1): number {
				const k = Math.floor(t);
				const m = [getTangent(k, tangentFactor, array), getTangent(k + 1, tangentFactor, array)];
				const p = [clipInput(k, array), clipInput(k + 1, array)];

				t -= k;
				const t2 = t * t;
				const t3 = t * t2;

				return (
					(2 * t3 - 3 * t2 + 1) * p[0] +
					(t3 - 2 * t2 + t) * m[0] +
					(-2 * t3 + 3 * t2) * p[1] +
					(t3 - t2) * m[1]
				);
			}
		})();
	});
</script>
<!-- blur-3xl -->
<div class="z-[-1] bg-base-200 opacity-50 pointer-events-none">
	<div bind:this={div} class="blur-3xl">
		
	</div>
</div>
