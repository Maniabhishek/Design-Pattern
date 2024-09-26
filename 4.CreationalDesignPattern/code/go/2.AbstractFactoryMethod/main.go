package main

import "fmt"

func main() {
	nike, err := GetSportsFactory("nike")
	if err != nil {
		panic(err)
	}

	fmt.Println(nike.makeShirt().getLogo())

	adidas, err := GetSportsFactory("adidas")
	if err != nil {
		panic(err)
	}
	fmt.Println(adidas.makeShoe().getLogo())
}
