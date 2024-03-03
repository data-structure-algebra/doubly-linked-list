import assert from 'assert';

import Node from './Node.js';
import _rotate_left_unknown_length from './_rotate_left_unknown_length.js';
import _rotate_right_unknown_length from './_rotate_right_unknown_length.js';

/**
 * Do nothing if x is empty or n is zero.
 * Rotate right n steps if n is positive.
 * Rotate left n steps if n is negative.
 *
 * @param {Node} x The current first node.
 * @param {Node} z The current last node.
 * @param {number} n
 * @return {[Node, Node]} The new first and last node.
 */
export default function rotate_right(x, z, n) {
	assert(Number.isInteger(n));
	if (x === z) {
		// NOTE This takes care of x === null => z === null.
		return [x, z];
	}

	assert(x instanceof Node);
	assert(z instanceof Node);
	return n === 0
		? [x, z]
		: n > 0
			? _rotate_right_unknown_length(x, z, n)
			: _rotate_left_unknown_length(x, z, -n);
}
