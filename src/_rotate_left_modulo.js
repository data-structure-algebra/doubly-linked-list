import assert from 'assert';

import Node from './Node.js';
import _rotate_left from './_rotate_left.js';

/**
 * Rotate non-empty list to the left n steps. The parameter n must be positive.
 *
 * @param {Node} x The current first node.
 * @param {Node} z The current last node.
 * @param {number} n List length, MUST be positive.
 * @param {number} k MUST be positive.
 * @return {[Node, Node]} The new first and last nodes.
 */
export default function _rotate_left_modulo(x, z, n, k) {
	assert(Number.isInteger(n));
	assert(n > 0);
	assert(Number.isInteger(k));
	assert(k > 0);
	assert(x instanceof Node);
	assert(x.prev === null);
	assert(z instanceof Node);
	assert(z.next === null);
	assert(x !== z);
	const m = k % n;
	return m === 0 ? [x, z] : _rotate_left(x, z, m);
}
