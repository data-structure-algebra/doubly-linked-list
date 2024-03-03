import assert from 'assert';

import Node from './Node.js';

/**
 * Split a list at {@link Node} x.
 *
 * /!\ The node to split at cannot be the first of the list.
 *
 * @param {Node} x Node to split at.
 */
export default function _split(x) {
	assert(x instanceof Node);
	assert(x.prev instanceof Node);
	x.prev.next = null;
	x.prev = null;
}
