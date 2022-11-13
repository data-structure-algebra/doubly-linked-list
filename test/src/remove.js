import test from 'ava';

import {list} from '@iterable-iterator/list';

import {values, from, _remove} from '#module';

test('_remove', (t) => {
	const l = from('abc');
	_remove(l.next);
	t.is(list(values(l)).join(''), 'ac');
});
