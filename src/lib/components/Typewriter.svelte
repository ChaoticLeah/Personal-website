<script lang="ts">
    import { onMount } from 'svelte';
    
    let { text, speed = 50, className }: { text: string, speed: number, className: string } = $props();
    let displayText = $state('');
    let index = 0;
    let timeout: number = -1;

    // Typewriter effect: Gradually adds characters to displayText
    const typewriterEffect = () => {
        if (index < text.length) {
            displayText += text[index];
            index++;
            timeout = setTimeout(typewriterEffect, speed); // Adjust typing speed (100ms between each character)
        } else {
            timeout = -1;
        }
    };

    export function reset() {
        displayText = ''; // Clear the current text
        index = 0; // Reset index
        if(timeout != -1) clearTimeout(timeout);
        typewriterEffect(); // Start typing
    }

    onMount(() => {
        reset();
    });



</script>

<p class={className}>
    {displayText}<span class="flashing">█</span>
</p>

<style>
    .flashing {
        animation: flash 1s infinite;
    }

    @keyframes flash {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
