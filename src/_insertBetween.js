import assert from 'assert';
import Node from './Node.js';

/**
 * _insertBetween.
 *
 * @param {Node} x
 * @param {Node} y
 * @param {any} value
 */
export default function _insertBetween(x, y, value) {
	assert(x instanceof Node);
	assert(y instanceof Node);
	const z = new Node(value, x, y);
	x.next = z;
	y.prev = z;
	return z;
}
