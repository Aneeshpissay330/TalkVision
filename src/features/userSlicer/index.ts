import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface UserState {
  token: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
  token: null
}

export const userSlicer = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<UserState>) => {
      state.token = payload.token;
    },
    logout: (state) => {
      state.token = null;
    },
  },
})

export const { login, logout } = userSlicer.actions

// Other code such as selectors can use the imported `RootState` type
export const getUserToken = (state: RootState) => state.user.token;

export default userSlicer.reducer;