package main

type Adidas struct {

}

func (a *Adidas)makeShoe() IShoe{
	return &AdidasShoe{
		Shoe: Shoe{
			size: 9,
			logo: "adidas",
		},
	}
}

func (a *Adidas)makeShirt()IShirt {
	return &AdidasShirt{
		Shirt: Shirt{
			size: 9,
			logo: "adidas",
		},
	}
}