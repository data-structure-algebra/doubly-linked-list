import assert from 'assert';
import Node from './Node.js';
import _insertBetween from './_insertBetween.js';

/**
 * _insertAfter.
 *
 * @param {Node} x
 * @param {any} value
 */
export default function _insertAfter(x, value) {
	assert(x instanceof Node);
	return _insertBetween(x, x.next, value);
}
