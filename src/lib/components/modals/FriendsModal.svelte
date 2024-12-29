<script lang="ts">
	import FriendIcon from "../FriendIcon.svelte";
	import Modal from "./Modal.svelte";

	let modal: Modal;

	// let { timer }: { timer: Timer | null } = $props();



	export function open() {
		modal.open();
	}

	export function close() {
		modal.close();
	}

</script>

<Modal title="88x31's" bind:this={modal} hasCloseButton={true} canClose={true}>
    <h3>My 88x31:</h3>
    
    <p>Coming soon</p>
    <div class="divider" />
    <div class="flex justify-center">    
        <FriendIcon icon="https://amy.rip/88x31.png" url="https://amy.rip/" alt="Amy page" />
    </div>
</Modal>