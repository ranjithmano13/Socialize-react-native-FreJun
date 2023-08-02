import { createSlice} from '@reduxjs/toolkit';



const initialState = [];
const userPostSlice = createSlice({
  name: 'userPost',
  initialState,
  reducers: {
    add(state,action){
      state.push(action.payload)
    },
    remove(state,action){
        return state.filter(item=>item.id !== action.payload)

    }

  },
 
});

export default userPostSlice.reducer;
export const{add,remove} = userPostSlice.actions;