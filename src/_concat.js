import assert from 'assert';
import Node from './Node.js';

/**
 * Concatenate two input lists.
 *
 * @param {Node} z Last node of first input list.
 * @param {Node} y First node of second input list.
 */
export default function _concat(z, y) {
	assert(z instanceof Node && z.next === null);
	assert(y instanceof Node && y.prev === null);
	z.next = y;
	y.prev = z;
}
