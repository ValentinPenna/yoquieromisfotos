import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  _id: string;
  // Aquí puedes agregar más propiedades según tu modelo de órdenes
}

interface UserState {
  name: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
  orders: Order[];
  isAuthenticated: boolean;
}

const initialState: UserState = {
  name: '',
  lastName: '',
  email: '',
  role: '',
  _id: '',
  orders: [],
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<UserState, 'isAuthenticated' | 'orders'>>) => {
      const { name, lastName, email, role, _id } = action.payload;
      state.name = name;
      state.lastName = lastName;
      state.email = email;
      state.role = role;
      state._id = _id;
      state.isAuthenticated = true;
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const { setUser, setOrders, addOrder, clearUser } = userSlice.actions;
export default userSlice.reducer; 