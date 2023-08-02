import { createSlice} from '@reduxjs/toolkit';



const initialState = [];
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add(state,action){
      state.push(action.payload)
    }

  },
 
});

export default userSlice.reducer;
export const{add} = userSlice.actions;