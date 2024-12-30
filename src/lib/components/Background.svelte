<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import FloppySelect from './modals/FloppySelect.svelte';

	let floppySelect: FloppySelect;

	const gridRows = 30; // Number of rows
	const gridCols = 60; // Number of columns

	let icons = [
		'mage:folder',
		'mage:camera-fill',
		'mage:cup-hot',
		'mage:exclamation-triangle',
		'mage:fire-a',
		'mage:gameboy',
		'mage:gift',
		'mage:health-square',
		'mage:heart',
		'mage:message-dots-question-mark',
		'mage:memory-card',
		'mage:female',
		'mage:ribbon',
		'mage:save-floppy'
	];

	type ClickEvent = MouseEventHandler<HTMLButtonElement>;

	const behaviors = {
		'mage:female': {
			click: (event: ClickEvent) => {
				alert('Yeah im a girl :) 🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️🏳️‍⚧️');
			}
		},
		'mage:heart': {
			click: (event: ClickEvent) => {
				//More hearts!
				icons = [...icons, 'mage:heart-fill'];
			}
		},
		'mage:cup-hot': {
			click: (event: ClickEvent) => {
				window.open('https://ko-fi.com/chaotickitsune');
			}
		},
		'mage:save-floppy': {
			click: (event: ClickEvent) => {
				floppySelect.open();
			}
		}
	};
</script>

<div class=" h-screen w-screen overflow-clip">
	<div class="scroll-container">
		<div class="grid" style="--rows: {gridRows}; --cols: {gridCols};">
			{#each Array(gridRows * gridCols) as _, i}
				<button
					class="opacity-10 transition-all duration-1000 ease-out hover:opacity-100"
					tabindex="-1"
					on:click={(behaviors[icons[i % icons.length]] || {})?.click}
				>
					<Icon
						icon={icons[i % icons.length]}
						height="2rem"
						class={['text-primary', 'text-secondary', 'text-accent'][i % 8]}
					/>
				</button>
			{/each}
		</div>
	</div>
</div>

<FloppySelect bind:this={floppySelect} />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		overflow: hidden;
	}

	.scroll-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 200%; /* Extend the grid size */
		height: 200%; /* Extend the grid size */
		animation: scroll 120s linear infinite; /* Smooth scrolling animation */
	}

	.grid {
		display: grid;
		grid-template-rows: repeat(var(--rows), 1fr);
		grid-template-columns: repeat(var(--cols), 1fr);
		width: 100%;
		height: 100%;
	}

	.grid div {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: rgba(255, 255, 255, 0.8);
		transition: all 1s ease;
	}

	.grid div:hover {
		opacity: 1; /* Highlight when hovered */
	}

	/* Dynamic opacity based on distance */
	.grid div::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		opacity: calc(1 - min(1, (var(--distance) / var(--max-distance))));
	}

	@keyframes scroll {
		from {
			transform: translate(0, 0);
		}
		to {
			transform: translate(-50%, -50%);
		}
	}
</style>
