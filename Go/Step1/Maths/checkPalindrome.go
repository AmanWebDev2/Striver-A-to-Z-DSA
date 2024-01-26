package main

// Time Complexity: O(Log10N)

func isPalindrome(num int) bool {
	dup := num
	rev := 0
	for num > 0 {
		lastDigit := num % 10
		rev = rev*10 + lastDigit
		num = num / 10
	}

	return dup == rev
}
