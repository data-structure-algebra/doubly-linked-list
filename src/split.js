import assert from 'assert';
import Node from './Node.js';
import _split from './_split.js';

/**
 * Split a list at a {@link Node}.
 *
 * @param {Node} x First node of the list.
 * @param {Node} z Node to split at.
 */
export default function split(x, z) {
	if (x === z) {
		return [null, x];
	}

	assert(x instanceof Node);
	if (z === null) {
		return [x, null];
	}

	assert(z instanceof Node);
	_split(z);
	return [x, z];
}
