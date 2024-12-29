<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let debugMode = false;

	const gridRows = 30; // Number of rows
	const gridCols = 60; // Number of columns

	const icons = [
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
	// let mouseX = 0;
	// let mouseY = 0;

	// function handleMouseMove(event: { clientX: number; clientY: number }) {
	// 	const { clientX, clientY } = event;
	// 	document.documentElement.style.setProperty('--cursor-x', clientX + 'px');
	// 	document.documentElement.style.setProperty('--cursor-y', clientY + 'px');
	// }

	// function calculateOpacity(index: number) {
	// 	if (typeof window === 'undefined') return 0;

	// 	const row = Math.floor(index / gridCols);
	// 	const col = index % gridCols;

	// 	// Get grid container's bounding box
	// 	const gridRect = document.querySelector('.grid')?.getBoundingClientRect();
	// 	if (!gridRect) return 0;

	// 	// Calculate cell dimensions
	// 	const cellWidth = gridRect.width / gridCols;
	// 	const cellHeight = gridRect.height / gridRows;

	// 	// Calculate cell center position in relation to grid's top-left corner
	// 	const cellX = gridRect.left + col * cellWidth + cellWidth / 2;
	// 	const cellY = gridRect.top + row * cellHeight + cellHeight / 2;

	// 	// Calculate distance from cursor to cell center
	// 	const distance = Math.hypot(mouseX - cellX, mouseY - cellY);

	// 	// Normalize distance to a range between 0 and 1
	// 	const maxDistance = Math.hypot(window.innerWidth, window.innerHeight) / 4;
	// 	const opacity = Math.max(0.1, 1 - distance / maxDistance);

	// 	return opacity.toFixed(2); // Limit precision for smoother rendering
	// }

	// onMount(() => {
	// 	document.addEventListener('mousemove', handleMouseMove);
	// });
</script>

<div class="scroll-container">
	<div class="grid" style="--rows: {gridRows}; --cols: {gridCols};">
		{#each Array(gridRows * gridCols) as _, i}
			<div class="opacity-10 hover:opacity-40">
				<Icon icon={icons[i % icons.length]} height="2rem" class={['text-primary', 'text-secondary', 'text-accent'][i % 8]} />
			</div>
		{/each}
	</div>
	<!-- <div class="grid" style="--rows: {gridRows}; --cols: {gridCols};">
		{#each Array(gridRows * gridCols) as _, i}
			<div style="opacity: {calculateOpacity(i)};">
				{#if debugMode}
					{calculateOpacity(i)}
				{:else}
					<Icon icon={icons[i % icons.length]} height="2rem" />
				{/if}
			</div>
		{/each}
	</div> -->
</div>
<!-- {#key mouseX}
    <div class="highlight" style="transform: translate(calc({mouseX}px), calc({mouseY}px));"></div>
{/key} -->

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		overflow: hidden;
		background-color: #000; /* Background color */
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
