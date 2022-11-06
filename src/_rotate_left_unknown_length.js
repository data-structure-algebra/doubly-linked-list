import assert from 'assert';
import Node from './Node.js';
import _rotate_to from './_rotate_to.js';
import _rotate_left_modulo from './_rotate_left_modulo.js';

/**
 * Rotate list to the right n steps. The parameter n must be positive.
 *
 * @param {Node} x The current first node.
 * @param {Node} z The current last node.
 * @param {number} k MUST be positive.
 * @return {[Node, Node]} The new first and last nodes.
 */
export default function _rotate_left_unknown_length(x, z, k) {
	assert(Number.isInteger(k));
	assert(k > 0);
	assert(x instanceof Node);
	assert(x.prev === null);
	assert(z instanceof Node);
	assert(z.next === null);
	assert(x !== z);
	let y = z;
	let l = k;
	while (--l) {
		if (y === x) {
			return _rotate_left_modulo(x, z, k - l, k);
		}

		y = y.prev;
	}

	const w = y.prev;
	_rotate_to(x, y, z);
	return [y, w];
}
