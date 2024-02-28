import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../pages/Home'

type CartState = {
  items: Restaurant[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurant>) => {
      state.items.push(action.payload)
    }
  }
})

export default cartSlice.reducer
export const { add } = cartSlice.actions
