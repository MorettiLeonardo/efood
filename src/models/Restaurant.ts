class Restaurant {
  id: number
  name: string
  category: string
  description: string
  image: string
  infos: string[]

  constructor(
    id: number,
    name: string,
    category: string,
    description: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.name = name
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
  }
}

export default Restaurant
