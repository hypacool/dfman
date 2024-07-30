<script lang=ts>
	import Codeblock from '$lib/view/list/Codeblock.svelte';

    export let data;
    const { codeblock, actions } = data
</script>

<Codeblock {codeblock} />
<br>

<h2>Actions</h2>
{#each actions as action}
<a href="/man/codeblock/{codeblock.identifier}/{encodeURIComponent(action.name)}">
    <div>
        {action.icon.name} | {action.name} (aka. {action.aliases})
        {#if action.tags.length}
        <h4>Tags</h4>
        {#each action.tags as tag}
            <div>
                name: <code>{tag.name}</code>
                default: <code>{tag.defaultOption}</code>
                options: {@html tag.options.map(v => `<code>${v.name}</code>`).join(', ')}
            </div>
            <br>
        {/each}
        {/if}
    </div>
</a>
    <br>
    <hr>
{/each}