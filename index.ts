import { alphabet, many1 } from "./src/parseme/combinators"

const lol = many1(alphabet).run("[abcd2323")
console.log(lol)

// type BC = {
// 	b: string
// 	c: string
// }

// type A = {
// 	a: string
// }

// const p = Parser.gen(function* () {
// 	const b = yield* lookAhead(char("b"))
// 	if (b) {
// 		yield* char("b").then(notFollowedBy(char("a")))
// 		const c = yield* char("c").thenDiscard(char(";"))
// 		return { b, c } as BC
// 	} else {
// 		const a = yield* char("a")
// 		return { a } as A
// 	}
// })

// console.log(p.run("ba"))
