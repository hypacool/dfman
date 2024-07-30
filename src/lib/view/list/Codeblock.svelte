<script lang="ts">
	import type { ActionDump } from '$lib/actiondump';

	export let codeblock: ActionDump['codeblocks'][number];
</script>

<div>
	<h2>{codeblock.name}</h2>
	{codeblock.item.description.join(' ')}<br />
	{#if codeblock.item.additionalInfo.length}
		<h4>additional info</h4>
		{@html codeblock.item.additionalInfo.join('<br />')} <br />
	{/if}
	{#if codeblock.item.example.length}
		<h4>examples</h4>
		{@html codeblock.item.example.join('<br />').replaceAll('»', '')} <br />
	{/if}
</div>
