class Restaurant {
  id: number
  name: string
  description: string
  image: string
  infos: string[]

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.image = image
    this.infos = infos
  }
}

export default Restaurant
