import assert from 'assert';

import Node from './Node.js';
import _concat from './_concat.js';

/**
 * Concatenate two input lists.
 *
 * @param {Node} x First node of first input list (can be null).
 * @param {Node} z Last node of first input list (can be null).
 * @param {Node} y First node of second input list (can be null).
 * @return {Node} First node of the output list (or null if empty).
 */
export default function concat(x, z, y) {
	if (x === null) {
		assert(z === null);
		return y;
	}

	assert(x instanceof Node);
	assert(z instanceof Node);
	if (y === null) return x;
	assert(y instanceof Node);
	_concat(z, y);
	return x;
}
