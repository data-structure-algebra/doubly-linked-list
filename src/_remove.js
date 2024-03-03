import assert from 'assert';

import Node from './Node.js';
import _erase from './_erase.js';

/**
 * Removes input {@link Node} from its list. Cannot be first or last, use
 * _shift or _pop instead.
 *
 * /!\ Pointers in the extracted node are left unchanged.
 * /!\ <code>x</code> will have dangling pointers after removal if not single element.
 *
 * @param {Node} x Node to remove.
 */
export default function _remove(x) {
	assert(x instanceof Node);
	_erase(x, x.next);
}
