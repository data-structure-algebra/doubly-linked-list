import assert from 'assert';

import Node from './Node.js';

/**
 * Removes last {@link Node} from a non-empty list.
 *
 * @param {Node} x Last node (not null). Cannot be the first node.
 * @return {Node} Last node of new list (not null).
 */
export default function _pop(x) {
	assert(x instanceof Node);
	assert(x.next === null);
	const prev = x.prev;
	assert(prev !== null);
	prev.next = null;
	return prev;
}
