import assert from 'assert';

import Node from './Node.js';
import rotate_right from './rotate_right.js';

/**
 * Do nothing if x is empty or n is zero.
 * Rotate left n steps if n is positive.
 * Rotate right n steps if n is negative.
 *
 * @param {Node} x The current first node.
 * @param {Node} z The current last node.
 * @param {number} n
 * @return {[Node, Node]} The new first and last node.
 */
const rotate_left = (x, z, n) => {
	assert(Number.isInteger(n));
	assert(x === null || x instanceof Node);
	assert(z === null || z instanceof Node);
	return rotate_right(x, z, -n);
};

export default rotate_left;
