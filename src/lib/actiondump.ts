import JSON from "./actiondump.json"
import schema from "./actiondump.schema"
import { type FromSchema } from "json-schema-to-ts"

type ElementType<T> = T extends (infer U)[] ? U : T;

export type ActionDump = FromSchema<typeof schema>
export type ActionDump__CodeBlock = ElementType<ActionDump['codeblocks']>


const actiondump = JSON as unknown as ActionDump
export default actiondump;
export const patch = '6.6.1'
export { actiondump }