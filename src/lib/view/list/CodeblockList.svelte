<script lang=ts>
	import type { ActionDump } from "$lib/actiondump";
	import Codeblock from "./Codeblock.svelte";

    export let codeblocks: ActionDump['codeblocks']
</script>

{#each codeblocks as codeblock}
    <a href='/man/codeblock/{codeblock.identifier}'>
        <Codeblock {codeblock} />
    </a>
    <br />
    <hr />
{/each}