import assert from 'assert';
import Node from './Node.js';
import _concat from './_concat.js';

/**
 * Erase range [x, y) from list. Range cannot be empty.
 *
 * @param {Node} x Inclusive beginning of range to erase.
 * @param {Node} y Exclusive end of range to erase.
 */
export default function _erase(x, y) {
	assert(x instanceof Node);
	_concat(x.prev, y);
}
