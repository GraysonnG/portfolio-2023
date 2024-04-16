import type { RequestEvent } from "../$types";

export async function GET(_: RequestEvent) {
  const data = {
    data: "Hello World!"
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: new Headers({
      "content-type": "application/json"
    })
  })
}