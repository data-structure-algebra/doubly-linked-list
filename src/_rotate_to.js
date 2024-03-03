import _concat from './_concat.js';
import _split from './_split.js';

export default function _rotate_to(x, y, z) {
	_split(y);
	_concat(z, x);
}
