let intersectionObserver: IntersectionObserver | null = null;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(eventName));
		});
	});
}

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onenterViewport?: () => void;
		onexitViewport?: () => void;
	}
}

export default function viewport(element: Element) {
	ensureIntersectionObserver();
	intersectionObserver?.observe(element);

	return {
		destroy() {
			intersectionObserver?.unobserve(element);
		}
	};
}
