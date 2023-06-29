package main

type IGun interface {
	setName(name string)
	getName() string
	getPower() int
	setPower(power int)
}
