package main

import "fmt"

func main() {
	gun, err := getGun("musket")
	if err != nil {
		panic(err)
	}

	gun.setName("helios")
	fmt.Printf("%s \n", gun.getName())
}
