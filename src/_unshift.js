import assert from 'assert';

import Node from './Node.js';

/**
 * Unshift value to list.
 *
 * @param {Node} x First node of first input list (can be null).
 * @param {any} value Value to unshift.
 * @return {Node} The node at the front of the list (hence, the new node).
 */
export default function _unshift(x, value) {
	assert(x instanceof Node);
	assert(x.prev === null);
	const y = new Node(value, null, x);
	x.prev = y;
	return y;
}
