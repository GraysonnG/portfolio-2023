import { RequestEvent } from "../$types";

export async function GET(event: RequestEvent) {
  event.getClientAddress();
}