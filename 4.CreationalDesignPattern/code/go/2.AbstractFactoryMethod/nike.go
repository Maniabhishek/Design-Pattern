package main

type Nike struct {
}

func (n *Nike) makeShoe() IShoe {
	return &NikeShoe{
		Shoe: Shoe{
			logo: "nike",
			size: 9,
		},
	}
}

func (n *Nike) makeShirt()IShirt{
	return &NikeShirt{
		Shirt: Shirt{
			logo: "nike",
			size: 9,
		},
	}
}