import actiondump from "$lib/actiondump"
import { error } from "@sveltejs/kit"
const { codeblocks, actions: actiondumpActions } = actiondump

export async function load({ params: { id } }) {
    const codeblock = codeblocks.find(v => v.identifier === id)
    console.log(codeblock)
    if(!codeblock) error(404)
    const actions = actiondumpActions.filter(v => v.codeblockName === codeblock.name)
    return { codeblock, actions }
}