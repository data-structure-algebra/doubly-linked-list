import assert from 'assert';
import Node from './Node.js';

/**
 * Push value to list.
 *
 * @param {Node} z Last node of first input list (can be null).
 * @param {any} value Value to push.
 * @return {Node} The node at the front of the list (new node if empty, input
 * node otherwise).
 */
export default function _push(z, value) {
	assert(z instanceof Node);
	assert(z.next === null);
	const y = new Node(value, z, null);
	z.next = y;
	return y;
}
