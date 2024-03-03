import assert from 'assert';

import Node from './Node.js';

/**
 * Removes first {@link Node} from a non-empty list.
 *
 * @param {Node} x First node (not null). Cannot be the last node.
 * @return {Node} New list (not null).
 */
export default function _shift(x) {
	assert(x instanceof Node);
	assert(x.prev === null);
	const next = x.next;
	assert(next !== null);
	next.prev = null;
	return next;
}
