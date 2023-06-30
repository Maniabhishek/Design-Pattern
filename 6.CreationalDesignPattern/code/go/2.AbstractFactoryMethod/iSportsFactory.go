package main

import "fmt"

type ISportsFactory interface {
	makeShirt() IShirt
	makeShoe() IShoe
}

func GetSportsFactory(brand string) (ISportsFactory, error) {
	if brand == "nike" {
		return &Nike{}, nil
	} else if brand == "adidas" {
		return &Adidas{}, nil
	} else {
		return nil, fmt.Errorf("%s", "wrong type selected")
	}
}
