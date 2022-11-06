import Node from './Node.js';
import _concat from './_concat.js';

/**
 * Creates a list from an input iterable.
 *
 * @param {Iterable} iterable The input iterable.
 * @return {Node} First node of the newly created list (or null if empty list).
 */
export default function from(iterable) {
	const it = iterable[Symbol.iterator]();
	const event = it.next();

	if (event.done) return null;

	const first = new Node(event.value);
	let last = first;

	for (const value of it) {
		const next = new Node(value);
		_concat(last, next);
		last = next;
	}

	return first;
}
