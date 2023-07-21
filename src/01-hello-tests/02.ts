type CityType = {
  name: string
  country: string
}

type AddressType = {
  street: string
  city: CityType
}

type TechType = {
  id: number
  title: string
}

type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechType>
}

const student: StudentType = {
  id: 1,
  name: 'Leo',
  age: 32,
  isActive: true,
  address: {
    street: 'Zhukova 21',
    city: {
      name: 'Kiyv',
      country: 'Ukraine'
    },
  },
  technologies: [
    {
      id: 1,
      title: 'html'
    },
    {
      id: 2,
      title: 'js'
    },
    {
      id: 3,
      title: 'css'
    },
    {
      id: 4,
      title: 'react'
    },
  ]
}

