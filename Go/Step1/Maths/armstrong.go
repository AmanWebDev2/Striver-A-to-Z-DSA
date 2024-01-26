package main

import "math"

func isArmstrong(num int) bool {
	noOfDigits := int(math.Log10((float64(num)))) + 1
	dup := num
	armstrong := 0
	for num > 0 {
		lastDigit := num % 10
		armstrong = armstrong + int(math.Pow(float64(lastDigit), float64(noOfDigits)))
		num = num / 10
	}

	if armstrong == dup {
		return true
	}
	return false
}
