import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * Determine whether an array is empty
 * @param {Array} arr - The array to evaluate
 * @returns {boolean}
 */
export default function arrIsEmpty(arr) {
	assertArgs(arr)
	assertType(Array, arr)

	return arr.length === 0
}
