<script lang="ts">
	import * as dotlottie from "@lottiefiles/dotlottie-web";
	// import { DotLottie } from '@lottiefiles/dotlottie-web';

    let canvas: HTMLCanvasElement;

    let dotLottie: dotlottie.DotLottie;

    let props : {
        autoplay?: boolean;
        backgroundColor?: string;
        data?: dotlottie.Data;
        layout?: dotlottie.Layout;
        loop?: boolean;
        marker?: string;
        mode?: dotlottie.Mode;
        renderConfig?: dotlottie.RenderConfig;
        segment?: [number, number];
        speed?: number;
        src?: string;
        themeId?: string;
        useFrameInterpolation?: boolean;
    } = $props();
    

    $effect(() => {
        if (!canvas) return;
        dotLottie = new dotlottie.DotLottie({
            canvas: canvas,
            autoplay: true,
            loop: true,
            ...props
        });
    });
</script>

<canvas bind:this={canvas}> </canvas>
