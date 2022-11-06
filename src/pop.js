import assert from 'assert';
import Node from './Node.js';
import _pop from './_pop.js';

/**
 * Removes last {@link Node} from a list. Throws if input list is empty.
 *
 * @param {Node} x Last node.
 * @return {[Node, Node]} Last node of new list (possibly null) and removed node.
 */
export default function pop(x) {
	if (x === null) throw new Error('input list is empty');
	assert(x instanceof Node);
	return [x.prev === null ? null : _pop(x), x];
}
