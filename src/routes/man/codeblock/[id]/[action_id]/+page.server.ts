import actiondump from "$lib/actiondump"
import { error } from "@sveltejs/kit"
const { codeblocks, actions: actiondumpActions } = actiondump

export async function load({ params: { id, action_id } }) {
    const codeblock = codeblocks.find(v => v.identifier === id)
    console.log(codeblock)
    if(!codeblock) error(404)
    const action = actiondumpActions
        .filter(v => v.codeblockName === codeblock.name)
        .find(v => v.name === action_id)
    return { codeblock, action }
}