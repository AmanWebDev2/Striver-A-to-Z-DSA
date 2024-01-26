package main

// Time Complexity: O(N)

func isPrime(num int) bool {
	factors := 0
	for i := 1; i <= num; i++ {
		if num%i == 0 {
			factors++
		}
	}

	if factors == 2 {
		return true
	}

	return false
}

func isPrimeBetter(num int) bool {
	count := 0
	for i := 1; i*i <= num; i++ {
		if num%i == 0 {
			count++
			if num/i != i {
				count++
			}
		}
	}

	if count == 2 {
		return true
	}
	return false
}
