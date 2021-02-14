import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name : 'todo',
    initialState : [],
    reducers : {
        add : (state , {payload}) => {
            state.push(payload)
        },
        del : (state,{payload}) => {
            return state.filter(({id}) => id !== payload)
        }
    }
})


export const {add , del} = todoSlice.actions;

export const selectTodos = state => state.todo

export default todoSlice.reducer