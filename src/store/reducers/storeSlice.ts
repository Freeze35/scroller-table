import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TableData ={
    id:number;
    text: string;
}

type RowState ={
    data: TableData[]
}

const initialState: RowState ={
    data:[]
}

const storeSlice = createSlice({
        name: "scroller-table",
        initialState,
        reducers: {
            addToData: (state,action:PayloadAction<string>)=>{
                state.data = [...state.data,{
                    id:state.data.length + 1,
                    text:action.payload}]
            }
        }
    }
)

export const {addToData} = storeSlice.actions

export default storeSlice.reducer