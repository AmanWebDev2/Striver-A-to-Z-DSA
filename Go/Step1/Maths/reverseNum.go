package main

// Time Complexity O(log10N)

func reverseNum(num int) int {
	rev := 0

	for num > 0 {
		lastDigit := num % 10
		rev = rev*10 + lastDigit
		num = num / 10
	}
	return rev
}
