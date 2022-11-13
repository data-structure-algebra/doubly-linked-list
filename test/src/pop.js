import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {str} from './_fixtures.js';
import {from, pop, last, values} from '#module';

function throws(t, array) {
	const node = from(array);
	t.is(null, node);
	t.throws(() => pop(node), {message: /empty/});
}

throws.title = (title, array) => title ?? `pop(${str(array)}) ~> throws`;

function macro(t, array) {
	const node = from(array);
	const [after, popped] = pop(last(node));
	const first = after === null ? null : node;
	t.is(array[array.length - 1], popped.value);
	const expected = array.slice(0, -1);
	t.deepEqual(list(values(first)), expected);
	t.is(last(first), after);
}

macro.title = (title, array) =>
	title ?? `pop(${str(array)}) ~> ${array[array.length - 1]}`;

test(throws, []);
test(macro, [27]);
test(macro, list(range(50)));
test(macro, list(range(10_000)));
