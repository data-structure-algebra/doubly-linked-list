import assert from 'assert';
import Node from './Node.js';
import _push from './_push.js';

/**
 * Extend a list with an iterable.
 *
 * @param {Node} z The last node of the list to extend.
 * @param {Iterable} iterable The input iterable.
 * @return {Node} Last node of the extended list.
 */
export default function _extend(z, iterable) {
	assert(z instanceof Node);
	let y = z;

	for (const value of iterable) {
		y = _push(y, value);
	}

	return y;
}
