import assert from 'assert';

import Node from './Node.js';
import _rotate_to from './_rotate_to.js';

/**
 * Rotate list to the right k steps. The parameter k must be positive and
 * smaller than the length of the list.
 *
 * @param {Node} x The current first node.
 * @param {Node} z The current last node.
 * @param {number} k MUST be positive and smaller than the length of the list.
 * @return {[Node, Node]} The new first and last nodes.
 */
export default function _rotate_right(x, z, k) {
	assert(Number.isInteger(k));
	assert(k > 0);
	assert(x instanceof Node);
	assert(x.prev === null);
	assert(z instanceof Node);
	assert(z.next === null);
	assert(x !== z);
	let y = x;
	do {
		y = y.next;
		assert(y instanceof Node);
	} while (--k);

	const w = y.prev;
	_rotate_to(x, y, z);
	return [y, w];
}
