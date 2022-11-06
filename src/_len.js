import assert from 'assert';
import Node from './Node.js';

/**
 * Compute the length of a non-empty list.
 *
 * @param {Node} x First node of the input list.
 * @return {number} The length of the input list.
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
export default function _len(x) {
	assert(x instanceof Node);
	let n = 1;
	let y = x.next;
	while (y !== null) {
		++n;
		y = y.next;
	}

	return n;
}
