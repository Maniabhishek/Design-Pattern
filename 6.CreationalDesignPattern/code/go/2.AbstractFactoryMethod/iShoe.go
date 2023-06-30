package main

type Shoe struct {
	size float64
	logo string
}

type IShoe interface {
	setSize(size float64)
	setLogo(logo string)
	getLogo() string
	getSize() float64
}

func (s *Shoe) setSize(size float64) {
	s.size = size
}

func (s *Shoe) setLogo(logo string) {
	s.logo = logo
}

func (s *Shoe) getLogo() string {
	return s.logo
}

func (s *Shoe) getSize() float64 {
	return s.size
}
