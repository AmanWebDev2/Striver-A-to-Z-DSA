package main

import (
	"math"
)

// time complexity: O(Log10N)

func countDigit(num int) int {
	count := 0
	for num > 0 {
		count++
		num = num / 10
	}
	return count
}

func countDigit2(num float64) int {
	digits := int(math.Log10(num)) + 1
	return digits
}
