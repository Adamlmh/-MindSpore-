import { createSlice } from "@reduxjs/toolkit";

const mobanSlice = createSlice({
  name: "moban",
  //初始化状态
  initialState:{
    mobanList:[]
  },
  //修改状态的方法 同步修改
  reducers:{
    setMobanList(state,action){
      state.mobanList = action.payload
    }
  }
})

//解构出来actionCreater函数  （用于更新状态）
export const {setMobanList} = mobanSlice.actions

//导出reducer  （用于创建store）
export default mobanSlice.reducer