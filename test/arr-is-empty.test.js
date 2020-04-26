import arrIsEmpty from '../src/arr-is-empty'

describe('arrIsEmpty', () => {
	test('works', () => {
		expect(arrIsEmpty([])).toBe(true)
		expect(arrIsEmpty([2])).toBe(false)
	})
})
