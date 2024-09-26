package main

type Shirt struct {
	logo string
	size float64
}

type IShirt interface {
	setSize(size float64)
	setLogo(logo string)
	getLogo() string
	getSize() float64
}

func (s *Shirt) setSize(size float64) {
	s.size = size
}

func (s *Shirt) setLogo(logo string) {
	s.logo = logo
}

func (s *Shirt) getLogo() string {
	return s.logo
}

func (s *Shirt) getSize() float64 {
	return s.size
}
