declare type Menu = {
  id: number
  foto: string
  preco: number
  nome: string
  porcao: string
  descricao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}
