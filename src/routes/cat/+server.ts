import type { RequestEvent } from "../$types";

const CAT_SOURCE = "https://cataas.com/cat/gif";

export async function GET({ url }: RequestEvent) {
  const res = await fetch(CAT_SOURCE);
  return new Response(res.body)
}