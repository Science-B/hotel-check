import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User, UserState } from '../api/interfaces';

const initialState: UserState = {
	login: '',
	password: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		userLogIn: (state, action: PayloadAction<User>): void => {
			state.login = action.payload.login;
			state.password = action.payload.password;
		},
		userLogOut: (state): void => {
			state.login = '';
			state.password = '';
		},
	},
});

const { reducer: userReducer, actions } = userSlice;
export const { userLogIn, userLogOut } = actions;

export default userReducer;
