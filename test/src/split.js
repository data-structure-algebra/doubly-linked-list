import test from 'ava';

import {list} from '@iterable-iterator/list';

import {str} from './_fixtures.js';

import {from, values, split} from '#module';

const macro = test.macro({
	exec(t, sequence, i) {
		const x = from(sequence);
		let y = x;
		for (let k = 0; k < i; ++k) y = y.next;
		const [s1, s2] = split(x, y);
		if (x === y) {
			t.is(s1, null);
			t.is(s2, x);
		} else {
			t.is(s1, x);
			t.is(s2, y);
		}

		const left = list(values(s1)).join('');
		const right = list(values(s2)).join('');
		const expected = [sequence.slice(0, i), sequence.slice(i)];
		t.deepEqual([left, right], expected);
	},
	title(title, sequence, i) {
		return title ?? `split(${str(sequence)}, ${i})`;
	},
});

test(macro, '', 0);
test(macro, 'a', 0);
test(macro, 'a', 1);
test(macro, 'ab', 0);
test(macro, 'ab', 1);
test(macro, 'ab', 2);
test(macro, 'abc', 0);
test(macro, 'abc', 1);
test(macro, 'abc', 2);
test(macro, 'abc', 3);
test(macro, 'abcd', 0);
test(macro, 'abcd', 1);
test(macro, 'abcd', 2);
test(macro, 'abcd', 3);
test(macro, 'abcd', 4);
