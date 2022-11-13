import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {
	from,
	rotate_left,
	rotate_right,
	last,
	values,
} from '../../src/index.js';
import {str} from './_fixtures.js';

const toArray = (first) => list(values(first));

const immutability = (t, input, n) => {
	const x = from(input);
	const [y, a] = rotate_left(x, last(x), n);
	const [z, b] = rotate_right(y, a, n);

	t.is(z, x);
	t.is(b, last(x));
	t.deepEqual(toArray(z), toArray(x));
};

immutability.title = (title, input, n) =>
	title ?? `immutability (${str(input)}, ${n})`;

test(immutability, [], 0);
test(immutability, [], -1);
test(immutability, [], 1);
test(immutability, [], -100);
test(immutability, [], 100);
test(immutability, 'x', 0);
test(immutability, 'x', -1);
test(immutability, 'x', 1);
test(immutability, 'x', -100);
test(immutability, 'x', 100);
test(immutability, 'ab', 0);
test(immutability, 'ab', -1);
test(immutability, 'ab', 1);
test(immutability, 'ab', -100);
test(immutability, 'ab', 100);
test(immutability, 'abc', 0);
test(immutability, 'abc', -1);
test(immutability, 'abc', 1);
test(immutability, 'abc', -101);
test(immutability, 'abc', 100);
test(immutability, list(range(1000)), 0);
test(immutability, list(range(1000)), -1);
test(immutability, list(range(1000)), 1);
test(immutability, list(range(1000)), -100);
test(immutability, list(range(1000)), 100);

const mutability = (t, rotate, input, n, output) => {
	const expected = list(output);
	const x = from(input);
	const [y, z] = rotate(x, last(x), n);
	const actual = toArray(y);
	t.deepEqual(actual, expected);
	t.is(z, last(y));
};

mutability.title = (title, rotate, input, n, output) =>
	title ?? `mutability ${rotate.name}(${str(input)}, ${n}) = ${str(output)}`;

test(mutability, rotate_left, [], 0, []);
test(mutability, rotate_left, [], -1, []);
test(mutability, rotate_left, [], 1, []);
test(mutability, rotate_left, [], -100, []);
test(mutability, rotate_left, [], 100, []);
test(mutability, rotate_right, [], 0, []);
test(mutability, rotate_right, [], -1, []);
test(mutability, rotate_right, [], 1, []);
test(mutability, rotate_right, [], -100, []);
test(mutability, rotate_right, [], 100, []);
test(mutability, rotate_left, 'abc', 0, 'abc');
test(mutability, rotate_left, 'abc', -1, 'bca');
test(mutability, rotate_left, 'abc', 1, 'cab');
test(mutability, rotate_right, 'abc', 0, 'abc');
test(mutability, rotate_right, 'abc', -1, 'cab');
test(mutability, rotate_right, 'abc', 1, 'bca');
