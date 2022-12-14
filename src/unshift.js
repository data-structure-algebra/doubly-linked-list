import Node from './Node.js';
import _unshift from './_unshift.js';

/**
 * Unshift value to list.
 *
 * @param {Node} x First node of first input list (can be null).
 * @param {any} value Value to unshift.
 * @return {Node} The node at the front of the list (hence, the new node).
 */
export default function unshift(x, value) {
	if (x === null) return new Node(value, null, null);
	return _unshift(x, value);
}
