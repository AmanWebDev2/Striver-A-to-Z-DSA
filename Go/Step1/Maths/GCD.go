package main

import "math"

// Time Complexity: O(min(n1,n2))
func getGcd(n1, n2 int) int {
	min := math.Min(float64(n1), float64(n2))
	gcd := 0
	for i := 1; i <= int(min); i++ {
		if n1%i == 0 && n2%i == 0 {
			gcd = i
		}
	}
	return gcd
}

// Euclidean Algo
// Time Complexity: O(Math.log(phie)min(a,b))
func getGcdByEuclidean(n1, n2 int) int {

	for n1 > 0 && n2 > 0 {
		if n1 > n2 {
			n1 = n1 % n2

		} else {
			n2 = n2 % n1
		}
	}

	if n1 == 0 {
		return n2
	}
	return n1
}
