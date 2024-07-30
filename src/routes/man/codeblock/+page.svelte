<script>
	import CodeblockList from "$lib/view/list/CodeblockList.svelte"
    export let data
    const { codeblocks } = data
</script>

<h1>Code Blocks</h1>

<CodeblockList {codeblocks} />