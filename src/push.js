import assert from 'assert';

import Node from './Node.js';
import _push from './_push.js';

/**
 * Push value to list.
 *
 * @param {Node} x First node of first input list (can be null).
 * @param {Node} z Last node of first input list (can be null).
 * @param {any} value Value to push.
 * @return {Node} The node at the front of the list (new node if empty, input
 * node otherwise).
 */
export default function push(x, z, value) {
	if (x === null) return new Node(value, null, null);
	assert(x instanceof Node);
	_push(z, value);
	return x;
}
