import test from 'ava';

import {list} from '@iterable-iterator/list';

import {_insertAfter, _insertBefore, from, values} from '#module';

test('insertAfter', (t) => {
	const x = from('abc');
	const y = _insertAfter(x, 'z');
	t.is(y.value, 'z');
	t.is(list(values(x)).join(''), 'azbc');
});

test('insertBefore', (t) => {
	const x = from('abc');
	const y = _insertBefore(x.next, 'z');
	t.is(y.value, 'z');
	t.is(list(values(x)).join(''), 'azbc');
});
