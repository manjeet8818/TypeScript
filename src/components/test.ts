// // import { Hono } from "hono"

// export interface Env {}

// // type Bindings = {
// // 	CACHE: KVNamespace
// // }

// const app = new Hono<{ Bindings: Bindings }>();

// app.get("/:username", async c => {
//   const username = c.req.param("username")
//   const cachedResp = await c.env.CACHE.get(username, "json")

// if (cachedResp) {
// 	return c.json(cachedResp)
// }

//   const resp = await fetch(`https://api.github.com/users/manjeet88/repos`, {
//     headers: {
//       "User-Agent": "CF-Worker"
//     }
//   })


//   const data = await resp.json()  // Type assertion to 'any'
//   await c.env.CACHE.put(username, JSON.stringify(data))
//   return c.json(data)
// })