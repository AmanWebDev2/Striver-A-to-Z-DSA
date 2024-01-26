package main

import "fmt"

// Time Complexity: O(N)
func printAllDivisor(num int) {
	for i := 1; i <= num; i++ {
		if num%i == 0 {
			fmt.Println(i)

		}
	}
}

// Time Complexity: O(sqrt(N))
func printAllDivisorBetter(num int) {
	for i := 1; i*i <= num; i++ {
		if num%i == 0 {
			fmt.Println(i)
			if num/i != i {
				fmt.Println(num / i)
			}
		}
	}
}
