import Node from './Node.js';
import _push from './_push.js';

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

	const first = new Node(event.value, null, null);
	let last = first;

	for (const value of it) {
		last = _push(last, value);
	}

	return first;
}
