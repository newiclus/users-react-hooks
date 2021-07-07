import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserById, getUsers } from '../API/user';


const initialState = {
  list: [],
  loading: false,
  current: {}
};

const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (thunkAPI) => {
      const response = await getUsers();
      return response;
  }
);

const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (userId, thunkAPI) => {
      const response = await getUserById(userId);
      return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },

    edit: (state, action) => {
      let userIndex = null;

      state.list.some((user, index) => {
        userIndex = index;
        return action.payload.id === user.id
      });

      state.list[userIndex] = action.payload;
    },
    
    remove: (state, action) => {
      const newList = state.list.filter(user => action.id !== user.id);
      state.list = newList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload;
    });

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

export const { add, edit, remove } = userSlice.actions;
export { fetchUsers, fetchUserById };

export default userSlice.reducer;
