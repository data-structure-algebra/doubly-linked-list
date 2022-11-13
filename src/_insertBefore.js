import assert from 'assert';
import Node from './Node.js';
import _insertBetween from './_insertBetween.js';

/**
 * _insertBefore.
 *
 * @param {Node} x
 * @param {any} value
 */
export default function _insertBefore(x, value) {
	assert(x instanceof Node);
	return _insertBetween(x.prev, x, value);
}
