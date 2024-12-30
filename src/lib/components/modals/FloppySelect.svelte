<script lang="ts">
	import Floppy from '../Floppy.svelte';
	import Modal from './Modal.svelte';

	let modal: Modal;

	// let { timer }: { timer: Timer | null } = $props();

	const floppies: { text: string; flags: ('lesbian' | 'trans')[]; click: () => void }[] = [
		{
			text: 'Meow',
			flags: [],
			click() {
				alert('Meowww Meowww :3');
			}
		},
		{
			text: ':3',
			flags: ['trans'],
			click() {
				alert('Coming soon');
			}
		},
		{
			text: 'Im so gay omg',
			flags: ['trans', 'lesbian'],
			click() {
				alert(':3');
			}
		},
		{
			text: 'Lol this feature isnt done',
			flags: ['trans'],
			click() {
				alert('what did I just tell you? XD');
			}
		}
	];

	let selected = -1;

	let preselect = -1;

	export function open() {
		modal.open();
	}

	export function close() {
		modal.close();
	}
</script>

<Modal
	title="Select A Floppy"
	bind:this={modal}
	hasCloseButton={true}
	canClose={true}
	className="absolute top-0 left-0 w-screen h-screen !max-w-[100vw] !max-h-[100vh] overflow-hidden"
>
	<div class="h-1/3 transition-all duration-75" class:!h-full={selected !== -1}>
		<div
			class="flex h-full flex-col items-center overflow-hidden"
			class:justify-center={selected !== -1}
		>
			<img
				src="floppy-reader/Top.svg"
				class="z-20 w-6/12"
				alt="the top of the floppy disk reader"
			/>
			<img
				src="floppy-reader/Bottom.svg"
				class="w-6/12"
				alt="the bottom of the floppy disk reader"
			/>
			{#if selected !== -1}
				<!--  -mt-10 -->
				<button
					class="z-10 h-fit w-4/12 transition-all duration-1000 {selected !== -1
						? 'translate-y-[-100%]'
						: 'translate-y-0'}"
						onclick={()=>{
							selected = -1
							preselect = -1
						}}
				>
					<Floppy className="w-full h-full" text={floppies[selected].text} flags={floppies[selected].flags}
					></Floppy>
				</button>
			{/if}
		</div>
	</div>
	{#if selected === -1}
		<div class="flex items-center justify-center overflow-auto p-10">
			{#each floppies as floppy, i}
				<!-- onclick={floppy.click} -->
				<!-- 			class="relative -ml-[50%] first:ml-0 z-[calc(10-({i}*1))]" onclick={()=>{
				selected = i
			}} -->
				<div
					class="relative flex w-[20%] flex-col justify-center transition-all duration-300"
					class:ml-0={i === 0}
					class:-ml-[10%]={i !== 0 && preselect !== i - 1}
				>
					<button
						onclick={() => (preselect = preselect === i ? -1 : i)}
						class:selected={preselect === i}
						class:scale-110={preselect === i}
					>
						<!-- class:z-10={selected === i - 1} -->
						<!-- class:z-[calc(10-({i}*1))]={selected !== i} -->
						<Floppy className="w-full h-full" text={floppy.text} flags={floppy.flags}></Floppy>
					</button>
					{#if preselect === i}
						<button
							class="btn mt-4"
							onclick={() => {
								selected = preselect;
								setTimeout(() => {
									floppies[selected].click();
								}, 500);
							}}>Select!</button
						>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</Modal>

<style>
	@keyframes blink {
		0% {
			border-color: #fff000;
		}
		50% {
			border-color: #ffffff;
		}
		100% {
			border-color: #fff000;
		}
	}

	.selected {
		animation: blink 1s ease-in-out infinite alternate;
		border-width: 4px;
		border-style: solid;
		border-radius: 0.5rem; /* Makes the border rounded */
	}

	.insert {
	}
</style>
