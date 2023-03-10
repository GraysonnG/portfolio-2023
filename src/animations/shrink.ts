import type { EasingFunction, TransitionConfig } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';

type Direction = 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical';
interface Options {
	duration?: number;
	delay?: number;
	direction?: Direction;
	easing?: EasingFunction;
}

export function shrink(
	node: Element,
	{ delay = 0, duration = 600, direction = 'top', easing = cubicInOut }: Options
): TransitionConfig {
	const isVertical = direction === 'top' || direction === 'bottom' || direction === 'horizontal';

	return {
		delay,
		duration,
		easing,
		css: (t: number) => {
			const box = node.getBoundingClientRect();
			const width = box.width;
			const height = box.height;
			(node as HTMLElement).style.setProperty(direction, '0');

			return `
        width: ${isVertical ? width : width * t}px;
        height: ${isVertical ? height * t : height}px;
        ${direction}: 0;
      `;
		}
	};
}
