import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { useAppSelector } from '../../app/hooks';

// Define a type for the slice state
interface TabState {
    tabShown: boolean;
}

// Define the initial state using that type
const initialState: TabState = {
    tabShown: true
}

export const tabSlicer = createSlice({
    name: 'tab',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        showTab: (state) => {
            state.tabShown = true;
        },
        hideTab: (state) => {
            state.tabShown = false;
        }
    },
})

export const { showTab, hideTab } = tabSlicer.actions

export default tabSlicer.reducer;