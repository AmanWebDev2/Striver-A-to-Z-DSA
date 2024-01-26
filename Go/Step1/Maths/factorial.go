package main

// Time Complexity: O(N)

func factorial(num int) int {
	fact := 1
	for i := 1; i <= num; i++ {
		fact = fact * i
	}
	return fact
}
