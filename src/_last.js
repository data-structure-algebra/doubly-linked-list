import assert from 'assert';

import Node from './Node.js';

/**
 * Returns the last node of a list. The list cannot be empty.
 *
 * @param {Node} first First node of the list.
 * @return {Node} Last node of the list.
 */
export default function _last(first) {
	assert(first instanceof Node);
	let next = first;

	while (next.next !== null) {
		next = next.next;
	}

	return next;
}
