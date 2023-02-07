const splituris = ['/', '/contact'];

export default function isSplit(routeId: string | null): boolean {
	if (!routeId) return false;
	return splituris.findIndex((id) => id === routeId) >= 0;
}
