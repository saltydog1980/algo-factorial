def factorial(num):
	sum = 1
	for x in range(num, 0, -1):
		sum *= x
	return sum