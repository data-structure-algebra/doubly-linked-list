import assert from 'assert';
import Node from './Node.js';
import _last from './_last.js';

/**
 * Returns the last node of a list.
 *
 * @param {Node} first First node of the list.
 * @return {Node} Last node of the list.
 */
export default function last(first) {
	assert(first === null || first instanceof Node);
	return first === null ? null : _last(first);
}
