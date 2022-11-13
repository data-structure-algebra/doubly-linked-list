/**
 * Base node class.
 *
 * @class
 * @param {any} value The value to hold.
 * @param {Node|null} prev The value to hold.
 * @param {Node|null} next The value to hold.
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
export default function Node(value, prev, next) {
	/** @member {any} The value/key held by this node. */
	this.value = value;
	/** @member {Node|null} Pointer to previous (left) sibling */
	this.prev = prev;
	/** @member {Node|null} Pointer to next (right) sibling */
	this.next = next;
}
