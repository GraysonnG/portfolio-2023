import type { RequestEvent } from "../$types";

const HIGHLIGHT_SOURCE = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.css";

export async function GET({ url }: RequestEvent) {
  const res = await fetch(HIGHLIGHT_SOURCE);
  return new Response(res.body)
}