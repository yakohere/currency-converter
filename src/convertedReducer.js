import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { customAxios } from "./axios"

export const getBases = createAsyncThunk("converter/getBases",
    async () => {
        const response = customAxios.get("/latest")
            .then(res => Object.keys(res.data.data))
        return response
    }
)

export const getRates = createAsyncThunk("converter/getRates",
    async (body) => {
        const response = customAxios.get(`/latest?base_currency=${body}`)
            .then(res => res.data.data)
        return response
    }
)

const initialState = {
    bases: [],
    fromBase: "JPY",
    toBase: "JPY",
    rates: {},
    fromValue: "1"
}

const convertedSlice = createSlice({
    name: "converter",
    initialState,
    reducers: {
        changeFromBase: (state, action) => {
            state.fromBase = action.payload
        },
        changeToBase: (state, action) => {
            state.toBase = action.payload
        },
        changeFromValue: (state, action) => {
            state.fromValue = action.payload
        }
    },
    extraReducers: {
        [getBases.fulfilled]: (state, action) => {
            state.bases = action.payload
        },
        [getRates.fulfilled]: (state, action) => {
            state.rates = action.payload
        }
    }
})

export const { changeFromBase, changeToBase, changeFromValue } = convertedSlice.actions
export default convertedSlice.reducer
